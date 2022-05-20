import images from './connectResource'

const mainFolder = 'assets'

const svgIconPlaceholder = document.querySelectorAll('.svg-icon-placeholder');

svgIconPlaceholder.forEach((item) => {
    let iconName = item.getAttribute('data-icon');
    let iconURL = images[`./${iconName}.svg`]
    let urlIndex = iconURL.indexOf(mainFolder)
    iconURL = iconURL.slice(urlIndex)
    var icon = `<object data="${iconURL}" type="image/svg+xml"></object>`;
    item.innerHTML = icon;
})