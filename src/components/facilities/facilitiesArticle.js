let facilitiesArticle = function(facility) {

    let element = document.createElement('article')
    element.classList.add('adv-article')

    element.innerHTML = `
        <img class="adv-article__icon"src="${facility.icon}" alt=""/>
        <h4 class="adv-article__headline">${facility.headline}</h4>
        <p class="adv-article__description">${facility.text}</p>
    `

    return element
}

export default facilitiesArticle