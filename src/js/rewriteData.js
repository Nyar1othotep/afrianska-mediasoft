import images from './connectResource'
import func from './getUrlResource'

const mainFolder = 'assets'

let iconName
let fullIconUrl
let MinifiedIconUrl
let fullImageUrl
let MinifiedImageUrl

function rewriteData(data) {
    for (let i = 0; i < data.length; i++) {
        if (data[i]['icon']) {
            let iconData = data[i]['icon']
            if (Array.isArray(iconData)) {
                for (let i = 0; i < iconData.length; i++) {
                    iconName = iconData[i].replace('.svg', '')
                    fullIconUrl = func.getFullIconUrl(images, iconName)
                    MinifiedIconUrl = func.getMinifiedIconUrl(mainFolder, fullIconUrl)
                    iconData[i] = MinifiedIconUrl
                }
            } else {
                iconName = data[i]['icon'].replace('.svg', '')
                fullIconUrl = func.getFullIconUrl(images, iconName)
                MinifiedIconUrl = func.getMinifiedIconUrl(mainFolder, fullIconUrl)
                data[i]['icon'] = MinifiedIconUrl
            }
        }
        if (data[i]['img']) {
            let imgData = data[i]['img']
            if (Array.isArray(imgData)) {
                for (let i = 0; i < imgData.length; i++) {
                    fullImageUrl = images['./' + imgData[i]]
                    MinifiedImageUrl = func.getMinifiedImageUrl(mainFolder, fullImageUrl)
                    imgData[i] = MinifiedImageUrl
                }
            } else {
                fullImageUrl = images['./' + data[i]['img']]
                MinifiedImageUrl = func.getMinifiedImageUrl(mainFolder, fullImageUrl)
                data[i]['img'] = MinifiedImageUrl
            }
        }
    }
    return data
}

export default rewriteData