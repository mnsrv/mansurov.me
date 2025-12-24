function experiment2w() {
  // Localization data
  const locales = {
    en: {
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      weekdays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    },
    ru: {
      months: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
      weekdays: ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
    },
  };

  const COMPONENT_NAME = "d26";
  const YEAR = 2026;
  const WEEK_DAYS = 14;

  // Set your language here
  const currentLocale = "en";
  const l = locales[currentLocale];

  // Get the component set
  const componentSet = figma.currentPage.findOne(
    (node) => node.name === COMPONENT_NAME && node.type === "COMPONENT_SET"
  ) as ComponentSetNode;

  if (!componentSet) {
    figma.notify(`Cannot find component set named '${COMPONENT_NAME}'`);
    return;
  }

  // Get the reference to the component without creating an instance
  const dayComponent = componentSet.defaultVariant;

  if (!dayComponent) {
    figma.notify("Cannot find the variant");
    return;
  }

  const dayWidth = dayComponent.width;
  const dayHeight = dayComponent.height;
  const spacing = 0;

  // Helper: Convert JS day (0=Sun, 1=Mon) to our format (0=Mon, 6=Sun)
  function toMondayFirst(jsDay: number): number {
    return jsDay === 0 ? 6 : jsDay - 1;
  }

  // Helper: Add a day instance to the row
  function addDay(
    dayOfWeek: number,
    dayText: string,
    monthText: string,
    name: string,
    dayCount: number,
    currentRow: InstanceNode[],
    quarterRows: GroupNode[][],
    currentQuarter: number,
    periodStartQuarter: number
  ): {
    dayCount: number;
    currentRow: InstanceNode[];
    quarterRows: GroupNode[][];
    periodStartQuarter: number;
  } {
    const instance = dayComponent.createInstance();
    instance.name = name;
    instance.setProperties({
      "weekend?": dayOfWeek === 5 || dayOfWeek === 6 ? "true" : "false",
    });

    const textLayers = instance.findAll(
      (node) => node.type === "TEXT"
    ) as TextNode[];
    textLayers.forEach((layer) => {
      if (layer.name === "day") {
        layer.characters = dayText;
      }
      if (layer.name === "month") {
        layer.characters = monthText;
      }
    });

    instance.x = dayCount * (dayWidth + spacing);
    currentRow.push(instance);
    dayCount++;

    if (dayCount === WEEK_DAYS) {
      // Complete 2-week period - check if it spans quarters
      const rowGroup = figma.group(currentRow, figma.currentPage);
      rowGroup.name = `2 Week Period`;

      // Add to current quarter
      const yPos = quarterRows[currentQuarter].length * (dayHeight + spacing);
      rowGroup.y = yPos;
      quarterRows[currentQuarter].push(rowGroup);

      // If period started in a different quarter, duplicate it to that quarter too
      if (periodStartQuarter !== currentQuarter) {
        const duplicateGroup = rowGroup.clone();
        const duplicateYPos =
          quarterRows[periodStartQuarter].length * (dayHeight + spacing);
        duplicateGroup.y = duplicateYPos;
        quarterRows[periodStartQuarter].push(duplicateGroup);
      }

      currentRow = [];
      dayCount = 0;
      periodStartQuarter = currentQuarter; // Reset for next period
    }

    return { dayCount, currentRow, quarterRows, periodStartQuarter };
  }

  function createYearLayout() {
    let quarterRows: GroupNode[][] = [[], [], [], []]; // Q1, Q2, Q3, Q4
    let currentRow: InstanceNode[] = [];
    let dayCount = 0;
    let currentQuarter = 0; // 0 = Q1 (Jan-Mar), 1 = Q2 (Apr-Jun), etc.
    let periodStartQuarter = 0; // Track which quarter the current 2-week period started in

    // Get the day of week for January 1st
    const jan1DayOfWeek = toMondayFirst(new Date(YEAR, 0, 1).getDay());

    // Create empty days before January 1st (these go to Q1)
    for (let i = 0; i < jan1DayOfWeek; i++) {
      const result = addDay(
        i,
        "",
        "",
        `Empty ${i + 1}`,
        dayCount,
        currentRow,
        quarterRows,
        currentQuarter,
        periodStartQuarter
      );
      dayCount = result.dayCount;
      currentRow = result.currentRow;
      quarterRows = result.quarterRows;
      periodStartQuarter = result.periodStartQuarter;
    }

    // Create days for the entire year
    for (let month = 0; month < 12; month++) {
      // Check if we're starting a new quarter (months 0, 3, 6, 9)
      const newQuarter = Math.floor(month / 3);
      if (newQuarter !== currentQuarter) {
        // If we're in the middle of a period, it started in the previous quarter
        if (dayCount > 0) {
          periodStartQuarter = currentQuarter;
        }
        currentQuarter = newQuarter;
      }

      const daysInMonth = new Date(YEAR, month + 1, 0).getDate();

      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(YEAR, month, day);
        const dayOfWeek = toMondayFirst(date.getDay());
        const result = addDay(
          dayOfWeek,
          day.toString(),
          day === 1 ? l.months[month] : "",
          `${l.months[month]} ${day}`,
          dayCount,
          currentRow,
          quarterRows,
          currentQuarter,
          periodStartQuarter
        );
        dayCount = result.dayCount;
        currentRow = result.currentRow;
        quarterRows = result.quarterRows;
        periodStartQuarter = result.periodStartQuarter;
      }
    }

    // Add empty days at the end to complete the last row
    const lastDayOfWeek = toMondayFirst(new Date(YEAR, 11, 31).getDay());
    const daysNeededToCompleteRow = WEEK_DAYS - dayCount;

    for (let i = 0; i < daysNeededToCompleteRow; i++) {
      const dayOfWeek = (lastDayOfWeek + 1 + i) % 7;
      const result = addDay(
        dayOfWeek,
        "",
        "",
        `Empty End ${i + 1}`,
        dayCount,
        currentRow,
        quarterRows,
        currentQuarter,
        periodStartQuarter
      );
      dayCount = result.dayCount;
      currentRow = result.currentRow;
      quarterRows = result.quarterRows;
      periodStartQuarter = result.periodStartQuarter;
    }

    // Group 2-week periods by quarter and position them
    const quarterGroups: GroupNode[] = [];
    let yOffset = 0;
    for (let q = 0; q < 4; q++) {
      if (quarterRows[q].length > 0) {
        // Position each 2-week period within the quarter
        let currentY = 0;
        for (const period of quarterRows[q]) {
          period.y = currentY;
          currentY += period.height + spacing;
        }

        // Group all 2-week periods of this quarter together
        const quarterGroup = figma.group(quarterRows[q], figma.currentPage);
        quarterGroup.name = `Q${q + 1} ${YEAR}`;
        quarterGroup.y = yOffset;
        quarterGroups.push(quarterGroup);

        yOffset += quarterGroup.height + spacing * 20; // Space between quarters
      }
    }

    // Return all quarter groups (they remain separate for different papers)
    return quarterGroups;
  }

  // Create the layout
  createYearLayout();
}
experiment2w();
