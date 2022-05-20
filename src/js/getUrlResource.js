let IconUrlIndex
let imageUrlIndex

const getFullIconUrl = (images, iconName) => {
    return images[`./${iconName}.svg`]
}

const getMinifiedIconUrl = (mainFolder, fullIconUrl) => {
    IconUrlIndex = fullIconUrl.indexOf(mainFolder)
    return fullIconUrl.slice(IconUrlIndex)
}

const getFullImageUrl = (images, imageName, imageExtension) => {
    return images[`./${imageName}.${imageExtension}`]
}

const getMinifiedImageUrl = (mainFolder, fullImageUrl) => {
    imageUrlIndex = fullImageUrl.indexOf(mainFolder)
    return fullImageUrl.slice(imageUrlIndex)
}

export default { getFullIconUrl, getMinifiedIconUrl, getFullImageUrl, getMinifiedImageUrl }