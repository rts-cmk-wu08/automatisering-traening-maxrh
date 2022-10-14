let sitesArticle = function(site) {

    let element = document.createElement('article')
    element.classList.add('card', 'flex__item')
    
    element.innerHTML = `
        <img class="card__img" src="${site.img}" alt="${site.name}"/>
        <h4 class="card__title">${site.name}</h4>
        <p class="card__desc">${site.city}</p>
    `
    
    return element
    
    }
    
export default sitesArticle