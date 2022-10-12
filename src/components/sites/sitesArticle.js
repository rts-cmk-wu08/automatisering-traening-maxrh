let sitesArticle = function(item) {

    let element = document.createElement('article')
    element.classList.add('adv-article')
    
    element.innerHTML = `
        <img class="sites-article__img"src="${item.img}" alt=""/>
        <h4 class="sites-article__headline">${item.name}</h4>
        <p class="sites-article__description">${item.city}</p>
    `
    
    return element
    
    }
    
export default sitesArticle