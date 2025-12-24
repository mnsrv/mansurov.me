function createCalendar2021() {
  // Get the main component set
  const componentSet = figma.currentPage.findOne(
    (node) => node.name === "DAY" && node.type === "COMPONENT_SET"
  ) as ComponentSetNode;

  if (!componentSet) {
    figma.notify("Cannot find component set named 'DAY'");
    return;
  }

  // Get the reference to the component without creating an instance
  const dayComponent = componentSet.defaultVariant;

  if (!dayComponent) {
    figma.notify("Cannot find the variant");
    return;
  }

  const year = 2026;
  const dayWidth = dayComponent.width;
  const dayHeight = dayComponent.height;
  const spacing = 0; // Adjust spacing between days
  const rowSpacing = 0; // Adjust spacing between rows/months

  function createCalendar() {
    const monthNames = [
      "Янв",
      "Фев",
      "Мар",
      "Апр",
      "Май",
      "Июн",
      "Июл",
      "Авг",
      "Сен",
      "Окт",
      "Ноя",
      "Дек",
    ];
    const weekdays = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];

    const allMonthGroups: GroupNode[] = [];

    for (let month = 0; month < 12; month++) {
      const instances: InstanceNode[] = [];
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const instance = dayComponent.createInstance();
        const dayOfWeek = date.getDay();

        instance.name = day.toString();

        instance.x = (day - 1) * (dayWidth + spacing);

        // Set the weekend variant property
        instance.setProperties({
          "weekend?":
            dayOfWeek === 0 ? "true" : dayOfWeek === 6 ? "true" : "false",
        });

        // Find and update the text layers
        const textLayers = instance.findAll(
          (node) => node.type === "TEXT"
        ) as TextNode[];
        textLayers.forEach((layer) => {
          if (layer.name === "TITLE") {
            layer.characters = day.toString();
          }
          if (layer.name === "WEEKDAY") {
            layer.characters = weekdays[dayOfWeek];
          }
        });

        instances.push(instance);
      }

      // Fill remaining days with Empty variant
      const totalDaysInRow = 31;
      for (let day = daysInMonth + 1; day <= totalDaysInRow; day++) {
        const instance = dayComponent.createInstance();
        instance.name = "Empty";
        instance.x = (day - 1) * (dayWidth + spacing);

        instance.setProperties({
          "weekend?": "false",
        });

        instances.push(instance);
      }

      const monthGroup = figma.group(instances, figma.currentPage);
      monthGroup.name = monthNames[month];

      // Position each month below the previous one
      monthGroup.y = month * (dayHeight + rowSpacing);

      allMonthGroups.push(monthGroup);
    }

    // Group all months together
    const yearGroup = figma.group(allMonthGroups, figma.currentPage);
    yearGroup.name = year.toString();
  }

  createCalendar();
}

createCalendar2021();
