import images from './connectResource'
import func from './getUrlResource'

const mainFolder = 'assets'

const svgIconPlaceholder = document.querySelectorAll('.svg-placeholder')

let iconName
let fullIconUrl
let MinifiedIconUrl
let icon


svgIconPlaceholder.forEach((item) => {
    iconName = item.getAttribute('data-icon')
    fullIconUrl = func.getFullIconUrl(images, iconName)
    MinifiedIconUrl = func.getMinifiedIconUrl(mainFolder, fullIconUrl)
    icon = `<object data="${MinifiedIconUrl}" type="image/svg+xml"></object>`
    item.innerHTML = icon
})