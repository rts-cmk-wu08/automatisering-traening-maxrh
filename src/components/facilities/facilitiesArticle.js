let facilitiesArticle = function(facility) {

    let element = document.createElement('article')
    element.classList.add('card', 'flex__item')

    element.innerHTML = `
        <img class="card__icon" src="${facility.icon}" alt=""/>
        <h4 class="card__title">${facility.headline}</h4>
        <p class="card__desc">${facility.text}</p>
    `

    return element
}

export default facilitiesArticle