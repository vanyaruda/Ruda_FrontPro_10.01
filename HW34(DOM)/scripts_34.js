
const inpHtml = document.querySelector('.Inp')
const wrapperItem = document.querySelector('.wrapper-item')
const wrapper = document.querySelector('.wrapper')

setInterval(() => {
    const styles = getComputedStyle(wrapperItem)
    const top = parseFloat(styles.top)
    const left = parseFloat(styles.left)

    if (top < 100 && left === 0) {
        wrapperItem.style.top = top + 1 + 'px'
    } else if (top <= 100 && top > 0 && left === 100) {
        wrapperItem.style.top = top - 1 + 'px'
    } else if (top === 100) {
        wrapperItem.style.left = left + 1 + 'px'
    } else if (left <= 100 && top === 0) {
        wrapperItem.style.left = left - 1 + 'px'
    }
}, 10)


inpHtml.addEventListener("focus", () => {
    wrapperItem.style.display = 'block';
});

inpHtml.addEventListener("blur", () => {
    wrapperItem.style.display = 'none';
});