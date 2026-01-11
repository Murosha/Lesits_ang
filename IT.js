const btn = document.getElementById("btnIT");
const itcontainer = document.getElementById("itwords");

function renderWords(text) {
  container.innerHTML = "";
  const lines = text.split("\n");

  lines.forEach(line => {
    line = line.trim();
    if (!line) return;
    if (!line.includes("-")) {
      const h3 = document.createElement("h3");
      h3.textContent = line;
      h3.className = "sections";
      container.appendChild(h3);
      return;
    }
    const lastDash = line.lastIndexOf("-");
    const en = line.slice(0, lastDash).trim();
    const ua = line.slice(lastDash + 1).trim();

    const p = document.createElement("p");
    p.className = "words";
    p.textContent = en;

    p.addEventListener("click", () => {
      p.textContent = p.textContent === en ? ua : en;
    });

    container.appendChild(p);
  });
}
