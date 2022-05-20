import images from './connectResource'

const mainFolder = 'assets'

const imgPlaceholder = document.querySelectorAll('.img-placeholder');

imgPlaceholder.forEach((item) => {
    let imgName = item.getAttribute('data-img');
    let imgExtension = item.getAttribute('data-extension');
    let imgURL = images[`./${imgName}.${imgExtension}`]
    let urlIndex = imgURL.indexOf(mainFolder)
    imgURL = imgURL.slice(urlIndex)
    var img = `<img src="${imgURL}" alt="${imgName}">`;
    item.innerHTML = img;
})