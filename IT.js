const buttons = document.querySelectorAll("nav button");

buttons.forEach(button => {
  button.addEventListener("click", async () => {
    const fileName = button.dataset.file;
    const targetId = button.dataset.target;
    const container = document.getElementById(itwords);

    if (!container) {
      console.error("Контейнер не знайдено:", targetId);
      return;
    }

    try {
      const response = await fetch(fileName);
      const text = await response.text();
      renderWords(text, container);
    } catch (err) {
      console.error("Помилка завантаження:", err);
    }
  });
});

function renderWords(text, container) {
  container.innerHTML = "";
  const lines = text.split("\n");

  lines.forEach(line => {
    line = line.trim();
    if (!line) return;

    // Модулі
    if (/^\d+\s*[A-Z]$/i.test(line)) {
      const h2 = document.createElement("h2");
      h2.textContent = line.toUpperCase();
      h2.className = "module";
      container.appendChild(h2);
      return;
    }

    // Слова (без тире)
    if (!line.includes("-")) {
      const h3 = document.createElement("h3");
      h3.textContent = line;
      h3.className = "section";
      container.appendChild(h3);
      return;
    }

    //  Переводчик слов
    const lastDash = line.lastIndexOf("-");
    const en = line.slice(0, lastDash).trim();
    const ua = line.slice(lastDash + 1).trim();

    const p = document.createElement("p");
    p.className = "word";
    p.textContent = en;

    p.addEventListener("click", () => {
      p.textContent = p.textContent === en ? ua : en;
    });

    container.appendChild(p);
  });
}

