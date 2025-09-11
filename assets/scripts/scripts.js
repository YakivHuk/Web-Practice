const burgerButton = document.getElementById('burgerButton')
const navPanel = document.getElementById('navPanel')
let count = 0;

burgerButton.addEventListener('click', () => {
    count++
    burgerButton.classList.toggle('close-burger-button')
    navPanel.classList.toggle('burger-closing-animation')
    if (count%2 == 0) {
        setTimeout(() => navPanel.classList.toggle('d-none'), 500)
    } else { 
        navPanel.classList.toggle('d-none')
        setTimeout(() => navPanel.classList.toggle('burger-opening-animation'), 500)
        navPanel.classList.toggle('burger-opening-animation')
    }
})
