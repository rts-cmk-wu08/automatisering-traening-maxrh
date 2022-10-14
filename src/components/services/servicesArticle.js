let servicesArticle = function(service) {

    let element = document.createElement('article')
    element.classList.add('services-article')

    element.innerHTML = `
        <img class="services-article__icon"src="${service.illustration}" alt="${service.headline}"/>
        <h4 class="services-article__headline">${service.headline}</h4>
        <p class="services-article__description">${service.text}</p>
    `

    return element

}

export default servicesArticle