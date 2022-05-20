import myImagePath from './images/img.jpg'

const dynamicImg = document.querySelector('.dynamic-img')

dynamicImg.innerHTML = `<img src="${myImagePath}">`