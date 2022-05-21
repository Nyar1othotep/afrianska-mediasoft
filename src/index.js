import './scss/style.scss'
import './js/connectionImg'
import './js/connectionIcons'
import rewriteData from './js/rewriteData'

// let data = [{
//     img: 'logo.png',
//     icon: 'icon-home.svg'
// }, {
//     img: 'logo-footer.png',
//     icon: 'icon-lock.svg'
// }, {
//     img: 'logo.png',
//     icon: 'icon-lock.svg'
// }]

// let newData = rewriteData(data)

// for (let i = 0; i < newData.length; i++) {
//     let img = newData[i]['img']
//     let icon = newData[i]['icon']
//     gallery.innerHTML += `<div>
//     	 <img src="${img}" alt="">
// 		  <object data="${icon}" type="image/svg+xml"></object>
//      </div>`
// }

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');

const closeMenuBurger = () => {
    burger.classList.remove('active')
    menu.classList.remove('active')
    document.body.classList.remove('lock')
}

const closeOpenMenuBurger = () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    document.body.classList.toggle('lock')
}

document.addEventListener('click', (event) => {
    if (event.target.closest('.header__burger')) {
        closeOpenMenuBurger()
    }
    if (event.target.closest('.menu-header__link')) {
        closeMenuBurger()
    }
    if (!event.target.closest('.header__menu') && !event.target.closest('.header__burger')) {
        closeMenuBurger()
    }
})

const firstMenu = document.getElementById('first')
const secondMenu = document.getElementById('second')

document.addEventListener('click', (event) => {
    if (event.target.closest('#first')) {
        firstMenu.querySelector('.menu-header__nav').classList.toggle('active')
        firstMenu.querySelectorAll('.menu-header__item').forEach(item => {
            item.classList.toggle('active')
        })
    }
    if (event.target.closest('#second')) {
        secondMenu.querySelector('.menu-header__nav').classList.toggle('active')
        secondMenu.querySelectorAll('.menu-header__item').forEach(item => {
            item.classList.toggle('active')
        })
    }
})