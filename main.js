const burgerIcon = document.querySelector('.burger-icon')

const mobileMenu = document.querySelector('.mobile-menu')

const closeMenuIcon = document.querySelector('.close-button')

const mobileLinks = document.querySelector('.mobile-menu nav')

burgerIcon.addEventListener('click', e => {

    mobileMenu.classList.toggle('invisible')
    document.body.classList.toggle('toggle-scroll')
})

closeMenuIcon.addEventListener('click', e => {

    mobileMenu.classList.toggle('invisible')
    document.body.classList.toggle('toggle-scroll')
})

mobileLinks.addEventListener('click', e => {

    if (e.target.matches('a')) {

        mobileMenu.classList.toggle('invisible')
        document.body.classList.toggle('toggle-scroll')
    }
})