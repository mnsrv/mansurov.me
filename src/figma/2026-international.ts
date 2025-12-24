function createCalendar2026International() {
  // Localization data
  const locales = {
    en: {
      months: [
        "january",
        "february",
        "march",
        "april",
        "may",
        "june",
        "july",
        "august",
        "september",
        "october",
        "november",
        "december",
      ],
      weekdays: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    },
    ru: {
      months: [
        "январь",
        "февраль",
        "март",
        "апрель",
        "май",
        "июнь",
        "июль",
        "август",
        "сентябрь",
        "октябрь",
        "ноябрь",
        "декабрь",
      ],
      weekdays: ["пн", "вт", "ср", "чт", "пт", "сб", "вс"],
    },
  };

  const COMPONENT_NAME = "d26";
  const YEAR = 2026;
  const WEEK_DAYS = 28; // 4 weeks = 28 days

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
    isFirst: boolean,
    dayCount: number,
    currentRow: InstanceNode[],
    rows: GroupNode[]
  ): { dayCount: number; currentRow: InstanceNode[]; rows: GroupNode[] } {
    const instance = dayComponent.createInstance();
    instance.name = name;
    instance.setProperties({
      "weekend?": dayOfWeek === 5 || dayOfWeek === 6 ? "true" : "false",
      "first?": isFirst ? "true" : "false",
    });

    const textLayers = instance.findAll(
      (node) => node.type === "TEXT"
    ) as TextNode[];
    textLayers.forEach((layer) => {
      if (layer.name === "day" || layer.name === "TITLE") {
        layer.characters = dayText;
      }
      if (layer.name === "weekday" && dayText !== "") {
        layer.characters = l.weekdays[dayOfWeek];
      }
      if (layer.name === "month") {
        layer.characters = monthText;
      }
    });

    instance.x = dayCount * (dayWidth + spacing);
    currentRow.push(instance);
    dayCount++;

    if (dayCount === WEEK_DAYS) {
      const rowGroup = figma.group(currentRow, figma.currentPage);
      rowGroup.name = `4 Week Period ${rows.length + 1}`;
      rowGroup.y = rows.length * (dayHeight + spacing);
      rows.push(rowGroup);
      currentRow = [];
      dayCount = 0;
    }

    return { dayCount, currentRow, rows };
  }

  function createYearLayout() {
    let rows: GroupNode[] = [];
    let currentRow: InstanceNode[] = [];
    let dayCount = 0;

    // Get the day of week for January 1st
    const jan1DayOfWeek = toMondayFirst(new Date(YEAR, 0, 1).getDay());

    // Create empty days before January 1st
    for (let i = 0; i < jan1DayOfWeek; i++) {
      const result = addDay(
        i,
        "",
        "",
        `Empty ${i + 1}`,
        false,
        dayCount,
        currentRow,
        rows
      );
      dayCount = result.dayCount;
      currentRow = result.currentRow;
      rows = result.rows;
    }

    // Create days for the entire year
    for (let month = 0; month < 12; month++) {
      const daysInMonth = new Date(YEAR, month + 1, 0).getDate();

      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(YEAR, month, day);
        const dayOfWeek = toMondayFirst(date.getDay());
        const result = addDay(
          dayOfWeek,
          day.toString(),
          day === 1 ? l.months[month] : "",
          `${l.months[month]} ${day}`,
          day === 1,
          dayCount,
          currentRow,
          rows
        );
        dayCount = result.dayCount;
        currentRow = result.currentRow;
        rows = result.rows;
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
        false,
        dayCount,
        currentRow,
        rows
      );
      dayCount = result.dayCount;
      currentRow = result.currentRow;
      rows = result.rows;
    }

    // Handle any remaining days in the last row
    if (currentRow.length > 0) {
      const rowGroup = figma.group(currentRow, figma.currentPage);
      rowGroup.name = `4 Week Period ${rows.length + 1}`;
      rowGroup.y = rows.length * (dayHeight + spacing);
      rows.push(rowGroup);
    }

    // Group all rows together
    const yearGroup = figma.group(rows, figma.currentPage);
    yearGroup.name = `${YEAR} International Calendar`;
    return yearGroup;
  }

  // Create the layout
  createYearLayout();
}

createCalendar2026International();
