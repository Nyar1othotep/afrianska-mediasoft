import './scss/style.scss'
import './js/connectionImg'
import './js/connectionIcons'
import rewriteData from './js/rewriteData'

const getData = (callback) => {
    fetch('https://nyar1othotep.github.io/data-json-afrianska-article/article.json')
        .then(response => response.json())
        .then(json => callback(json))
}

const popularArticleRow = document.querySelector('.popular-article__row')

let title
let text
let author
let date
let readingTime
let img
let icon

const renderArticle = (data) => {
    let newData = rewriteData(data)
    renderPopularArticle(newData)
}

getData(renderArticle)

const renderPopularArticle = (data) => {
        for (let i = 0; i < 4; i++) {
            title = data[i]['title']
            text = data[i]['text']
            author = data[i]['author']
            date = data[i]['date']
            readingTime = data[i]['reading-time']
            img = data[i]['img']
            icon = data[i]['icon']
            popularArticleRow.innerHTML += `
					<div class="popular-article__column">
						<article class="popular-article__item item-popular-article">
							<a href="#" class="item-popular-article__image _ibg">
								${img === undefined ? '' : `<img src="${img}" alt="">`}
							</a>
							<div class="item-popular-article__content">
								<h6>${title}</h6>
								<p>${text}</p>
								<div class="item-popular-article__bottom">
									<div class="item-popular-article__info">
										<a href="#" class="item-popular-article__author">${author}</a>
										<p>${date}, ${readingTime}</p>
									</div>
									<div class="item-popular-article__links">
										${icon.reduce((r,i) => `${r}
											<a href="#" class="item-popular-article__link">
												<object data="${i}" type="image/svg+xml"></object>
											</a>
										`, "")}
									</div>
								</div>
							</div>
						</article>
					</div>
				`
		}
}

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

console.log('Куплю гараж');