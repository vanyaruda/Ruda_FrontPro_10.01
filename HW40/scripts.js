
const container = document.querySelector('.container');
const articleElements = container.querySelectorAll('.items-container');

// Итерируем по каждой статье и добавляем обработчик события "click"
articleElements.forEach((e) => {
    const imageElement = e.querySelector('.items');
    const clickerElement = e.querySelector('.clicker');
    let count = 0;
    clickerElement.textContent = count;

    imageElement.addEventListener('click', () => {
        count++;
        clickerElement.textContent = count;
    });
});



