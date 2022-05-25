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

const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__menu')
const menuLists = document.querySelectorAll('.header__menu>*')
let menuListsId = []

menuLists.forEach(item => menuListsId.push(item.id))

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

const closeMenuNav = (target) => {
    let item = document.getElementById(target)
    item.querySelector('.menu-header__nav').classList.toggle('active')
}

const closeAllMenuNav = () => {
    menuLists.forEach(item => {
        item.querySelector('.menu-header__nav').classList.remove('active')
    })
}

const closeMenuItem = (target) => {
    let item = document.getElementById(target)
    item.querySelectorAll('.menu-header__item').forEach(e => {
        e.classList.toggle('active')
    })
}

const closeAllMenuItem = () => {
    menuLists.forEach(item => {
        item.querySelectorAll('.menu-header__item').forEach(e => {
            e.classList.remove('active')
        })
    })
}

document.addEventListener('click', (event) => {
    if (event.target.closest('.header__burger')) {
        closeOpenMenuBurger()
        closeAllMenuNav()
        closeAllMenuItem()
    }
    if (event.target.closest('.menu-header__link')) {
        closeMenuBurger()
        closeAllMenuNav()
        closeAllMenuItem()
    }
    if (!event.target.closest('.header__menu') && !event.target.closest('.header__burger')) {
        closeMenuBurger()
        closeAllMenuNav()
        closeAllMenuItem()
    }
})

document.addEventListener('click', (event) => {
    for (let i = 0; i < menuListsId.length; i++) {
        if (event.target.closest(`#${menuListsId[i]}`)) {
            closeMenuNav(menuListsId[i])
            closeMenuItem(menuListsId[i])
        }
    }
})