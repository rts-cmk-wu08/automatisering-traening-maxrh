let servicesArticle = function(service) {

    let element = document.createElement('article')
    element.classList.add('card', 'flex__item')

    element.innerHTML = `
        <img class="card__img" src="${service.illustration}" alt="${service.headline}"/>
        <h4 class="card__title">${service.headline}</h4>
        <p class="card__desc">${service.text}</p>
    `

    return element

}

export default servicesArticle