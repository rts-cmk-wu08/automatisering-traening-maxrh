let advArticle = function(item) {

    let element = document.createElement('article')
    element.classList.add('card', 'flex__item')

    element.innerHTML = `
        <img class="card__icon" src="${item.icon}" alt=""/>
        <h4 class="card__title">${item.headline}</h4>
        <p class="card__desc">${item.text}</p>
    `

    return element

}

export default advArticle