import './scss/style.scss'
import './js/connectionImg'
import './js/connectionIcons'
import rewriteData from './js/rewriteData'

let data = [{
    img: 'logo.png',
    icon: 'icon-home.svg'
}, {
    img: 'logo-footer.png',
    icon: 'icon-lock.svg'
}, {
    img: 'logo.png',
}]

let newData = rewriteData(data)

for (let i = 0; i < newData.length; i++) {
    let img = newData[i]['img']
    let icon = newData[i]['icon']
    gallery.innerHTML += `<div>
    	 <img src="${img}" alt="">
		  <object data="${icon}" type="image/svg+xml"></object>
     </div>`
}