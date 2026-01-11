const btn = document.getElementById("btnIT");
const itcontainer = document.getElementById("itwords");

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
    }
    if (!line.includes("-")) {
      const h3 = document.createElement("h3");
      h3.textContent = line;
      h3.className = "sections";
      container.appendChild(h3);
      return;
    }
    const lastDash = line.lastIndexOf("-");
    if (lastDash === -1) return;

    const en = line.slice(0, lastDash).trim();
    const ua = line.slice(lastDash + 1).trim();

    const p = document.createElement("p");
    p.className = "words";
    p.dataset.ua = ua;
    p.textContent = en;

    p.addEventListener("click", () => {
      p.textContent = p.textContent === en ? ua : en;
    });

    container.appendChild(p);
  
