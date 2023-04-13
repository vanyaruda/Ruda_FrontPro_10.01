// Пишемо свій слайдер зображень.

// Відображаємо зображення та кнопки Next, Prev з боків від зображення.
// При кліку на Next - показуємо наступне зображення.
// При кліку на Prev - попереднє .
// При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev


const imgContainer = document.querySelector('.image-container')
const rightSlide = document.querySelector('.caorusel-right')
const leftSlide = document.querySelector('.caorusel-left')

let track = 0;
let counter = 1;
const banners = new Array(4);


window.addEventListener('load', () => {
    for (let i = 0; i < banners.length; i++) {
        let newDiv = document.createElement('div')
        newDiv.classList.add('image-wrapper')

        let newImg = document.createElement('img')
        newImg.classList.add('carousel-img')
        newImg.src = `./images/banner${i + 1}.jpeg`
        newDiv.appendChild(newImg)
        imgContainer.appendChild(newDiv)

    }

    return (wrapperOne = document.querySelector('.image-wrapper'))
})


const moveImgRight = () => {
    console.log(counter)
    if (counter === 1) {
        leftSlide.style.display = 'none'
        return
    }
    if (counter === banners.length) {
        rightSlide.style.display = 'block'
    }
    counter--;
    track = track + 100;
    wrapperOne.style.marginLeft = track + '%'
    if (counter === 1) {
        rightSlide.style.display = 'block'
    }
}

const moveImgLeft = () => {
    if (counter === banners.length) {
        rightSlide.style.display = 'none'
        return
    }
    if (counter === 1) {
        leftSlide.style.display = 'block'
    }
    counter++;
    track = track - 100;
    wrapperOne.style.marginLeft = track + '%'
    if (counter === banners.length) {
        leftSlide.style.display = 'block'
    }
}




leftSlide.addEventListener('click', () => {

    moveImgRight()
})

rightSlide.addEventListener('click', () => {
    moveImgLeft()
})

