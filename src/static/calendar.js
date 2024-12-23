function updateImage() {
  const color = document.querySelector('input[name="color"]:checked').value;
  const lang = document.querySelector('input[name="lang"]:checked').value;
  const image = document.getElementById("calendar-image");
  const link = document.getElementById("pdf-download");
  const colors = {
    pink: "#FF6482",
    blue: "#409CFF",
    green: "#30DB5B",
    gray: "#7C7C80",
  };

  image.src = `/images/2025-year-calendar-A2-${lang}-${color}.jpg`;
  image.alt = `2025 year calendar A2 ${lang} ${color}`;

  link.href = `/files/2025-A2-${lang}-${color}.pdf`;
  link.download = `2025-A2-${lang}-${color}.pdf`;
  link.style.backgroundColor = colors[color];
  link.textContent = lang === "ru" ? "Скачать PDF" : "Download PDF";
  const helperText =
    lang === "ru"
      ? "Рекомендуется печать на матовой бумаге А2, плотность 170 г/м²"
      : "Recommended: A2 matte paper, 170 g/m²";
  document.querySelector(".print-hint").textContent = helperText;

  document.querySelector(".image-preview").style.backgroundImage =
    `url(/images/2025-year-calendar-A2-${lang}-${color}.jpg)`;

  umami.track("Calendar Customization", {
    color: color,
    language: lang,
  });
}

document
  .querySelectorAll('input[name="color"], input[name="lang"]')
  .forEach((radio) => {
    radio.addEventListener("change", updateImage);
  });
