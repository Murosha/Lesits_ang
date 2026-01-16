const btn = document.getElementById("buttonka");
const output = document.getElementById("divka");

btn.addEventListener("click", () => {
  fetch("word100.txt")
    .then(res => res.text())
    .then(text => render(text));
});

function render(text) {
  output.innerHTML = "";

  const lines = text.split("\n");

  lines.forEach(line => {
    line = line.trim();
    if (!line) return;

    const parts = line.split(" - ");
    if (parts.length < 3) return;

    const en = parts[0].trim();
    const tr = parts[1].trim();
    const ua = parts.slice(2).join(" - ").trim();

    const front = `${en} - ${tr}`;

    const p = document.createElement("p");
    p.className = "word";
    p.textContent = front;

    p.addEventListener("click", () => {
      p.textContent =
        p.textContent === front ? ua : front;
    });

    output.appendChild(p);
  });
}
