const button = document.querySelector('.btn')
const imgContainer = document.querySelector('.smile-container')

const imgSrc = [
    './images/1.svg',
    './images/2.svg',
    './images/3.svg'
]
let lastImg = -1;

const imgRandom = () => {
    // чтобы не повторялась одна и та же сразу
    do {
        random = Math.floor(Math.random() * imgSrc.length)
    } while (random === lastImg)
    lastImg = random
    const img = document.createElement('img')
    img.src = imgSrc[random]
    img.style.height = '200px';
    img.style.width = '200px'
    imgContainer.appendChild(img)
}

button.addEventListener('click', () => {
    imgContainer.innerHTML = ''
    imgRandom()
})