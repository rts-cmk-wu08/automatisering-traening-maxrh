let projectsArticle = function(project) {

    let element = document.createElement('article')
    element.classList.add('card', 'flex__item')

    element.innerHTML = `
        <img class="card__img" src="${project.cover['data'].attributes.url}" alt="${project.title}"/>
        <h4 class="card__title">${project.title}</h4>
        <p class="card__desc">${project.description}</p>
    `
    return element

}

export default projectsArticle