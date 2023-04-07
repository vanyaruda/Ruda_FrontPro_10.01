const body = document.body
const hwDiv = document.createElement('div')
const hwTitle = document.createElement('p')
const link = document.querySelectorAll('.link')

let linkHref = ''
let fullUrl = ''

body.style.backgroundColor = 'bisque'
hwTitle.innerHTML = 'ДЗ 37. Перехід за посиланням'
hwTitle.style.fontFamily = 'Times New Roman'
hwTitle.style.marginBottom = '30px'
hwTitle.style.fontSize = '30px'
body.prepend(hwDiv)
hwDiv.prepend(hwTitle)
hwDiv.style.display = 'flex'
hwDiv.style.justifyContent = 'center'
hwDiv.style.alignItems = 'center'



link.forEach(link => {
    link.addEventListener('click', () => {
        // отримую посилання.
        const linkHref = link.getAttribute('href')

        if (linkHref.startsWith('http') === false && linkHref.startsWith('https') === false) {
            fullUrl = `https://${linkHref}`
            // location.href = fullUrl - щоб у цьому ж вікні
            // open(fullUrl, '_blank')  - для таргету (відкритті у другому вікні)
            open(fullUrl, '_blank')
        }
    })

})
