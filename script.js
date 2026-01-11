const buttons = document.querySelectorAll("nav button");
const container = document.getElementById("words");

buttons.forEach(button => {
  button.addEventListener("click", async () => {
    const fileName = button.dataset.file;
    console.log("Натиснув кнопку:", fileName)
    const response = await fetch(fileName);
    const text = await response.text();
    console.log("Отриманний текст:", text);
    renderWords(text);
  });
});

function renderWords(text) {
  container.innerHTML = "";
  const lines = text.split("\n");

  lines.forEach(line => {
    line = line.trim();
    if (!line) return;
    if (/^\d+[A-Z]$/i.test(line)) {
      const h2 = document.createElement("h2");
      h2.textContent = line.toUpperCase();
      h2.className = "module";
      container.appendChild(h2);
      return;
    }

    if (!line.includes("-")) return;

    const lastDash = line.lastIndexOf("-");
    if (lastDash === -1) return;

    const en = line.slice(0, lastDash).trim();
    const ua = line.slice(lastDash + 1).trim();

    const p = document.createElement("p");
    p.className = "word";
    p.dataset.ua = ua;
    p.textContent = en;

    p.addEventListener("click", () => {
      p.textContent = p.textContent === en ? ua : en;
    });

    container.appendChild(p);
  });
  const words = document.querySelectorAll(".word");
  words.forEach(word => {
    if (/\d/.test(word.textContent)) {
      word.classList.add("big");
    }
  });
}





