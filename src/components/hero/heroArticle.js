let heroArticle = function(hero) {

    let element = document.createElement('article')
    element.classList.add('hero')

    element.innerHTML = `
        <img class="hero__img" src="${hero.image}" alt="${hero.headline}"/>
        <h4 class="hero__headline">${hero.headline}</h4>
        <p class="hero__description">${hero.copy}</p>
    `

    return element

}

export default heroArticle