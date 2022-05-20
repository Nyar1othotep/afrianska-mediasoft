import images from './connectResource'
import func from './getUrlResource'

const mainFolder = 'assets'

const imgPlaceholder = document.querySelectorAll('.img-placeholder')

let imageName
let imageExtension
let fullImageUrl
let MinifiedImageUrl
let img

imgPlaceholder.forEach((item) => {
    imageName = item.getAttribute('data-img')
    imageExtension = item.getAttribute('data-extension')
    fullImageUrl = func.getFullImageUrl(images, imageName, imageExtension)
    MinifiedImageUrl = func.getMinifiedImageUrl(mainFolder, fullImageUrl)
    img = `<img src="${MinifiedImageUrl}" alt="${imageName}">`
    item.innerHTML = img
})