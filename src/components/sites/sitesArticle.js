let sitesArticle = function(site) {

    let element = document.createElement('article')
    element.classList.add('sites')
    
    element.innerHTML = `
        <img class="sites__img"src="${site.img}" alt="${site.name}"/>
        <h4 class="sites__headline">${site.name}</h4>
        <p class="sites__description">${site.city}</p>
    `
    
    return element
    
    }
    
export default sitesArticle