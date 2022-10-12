let heroArticle = function(item) {

    let element = document.createElement('article')
    element.classList.add('services-article')

    element.innerHTML = `
        <img class="services-article__icon"src="${item.image}" alt=""/>
        <h4 class="services-article__headline">${item.headline}</h4>
        <p class="services-article__description">${item.copy}</p>
    `

    return element

}

export default heroArticle