let servicesArticle = function(item) {

    let element = document.createElement('article')
    element.classList.add('services-article')

    element.innerHTML = `
        <img class="services-article__icon"src="${item.illustration}" alt=""/>
        <h4 class="services-article__headline">${item.headline}</h4>
        <p class="services-article__description">${item.text}</p>
    `

    return element

}

export default servicesArticle