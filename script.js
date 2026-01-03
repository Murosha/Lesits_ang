document.querySelectorAll(`.word`).forEach
(word => {
    const en = word.textContent
    const ua = word.dataset.ua
    word.addEventListener(`click`, () => {
        word.textContent = word.textContent === en ? ua : en;
    });
});



