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
    if (!line.includes("-")) return;

    const lastSlash = line.lastIndexOf("-");
if (lastSlash === -1) return;

const en = line.slice(0, lastSlash).trim();
const ua = line.slice(lastSlash + 1).trim();


    const p = document.createElement("p");
    p.className = "word";
    p.dataset.ua = ua;
    p.textContent = en;
    p.addEventListener("click", () => {
        p.textContent = p.textContent === en ? ua : en;
       words.forEach(word => {
  if (/\d/.test(word.textContent)) {
    word.classList.add("big");
  }
  });
    });
    container.appendChild(p);
  });
}




