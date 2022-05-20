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
            iconName = data[i]['icon'].replace('.svg', '')
            fullIconUrl = func.getFullIconUrl(images, iconName)
            MinifiedIconUrl = func.getMinifiedIconUrl(mainFolder, fullIconUrl)
            data[i]['icon'] = MinifiedIconUrl
        }
        if (data[i]['img']) {
            fullImageUrl = images['./' + data[i]['img']]
            MinifiedImageUrl = func.getMinifiedImageUrl(mainFolder, fullImageUrl)
            data[i]['img'] = MinifiedImageUrl
        }
    }
    return data
}

export default rewriteData