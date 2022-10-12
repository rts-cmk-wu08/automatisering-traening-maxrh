let advArticle = function(item) {

    let element = document.createElement('article')
    element.classList.add('adv-article')

    element.innerHTML = `
        <img class="adv-article__icon"src="${item.icon}" alt=""/>
        <h4 class="adv-article__headline">${item.headline}</h4>
        <p class="adv-article__description">${item.text}</p>
    `

    return element

}

export default advArticle