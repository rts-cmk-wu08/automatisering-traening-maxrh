import projectsTypes from "./projectsTypes.js"

let projectsArticle = function(project) {

    let element = document.createElement('article')
    element.classList.add('card', 'flex__item')

    let imgSize = project.cover.data.attributes.formats
    let imgUrl = imgSize.large ? imgSize.large.url : ( imgSize.medium ? imgSize.medium.url : project.cover.data.attributes.url )

    let imgWrap = document.createElement('div')
    imgWrap.classList.add('card__img')

    imgWrap.innerHTML = `
        <img src="${imgUrl}" alt="${project.title}"/>
  
    `

    element.innerHTML = `
        <h4 class="card__title">${project.title}</h4>
        <p class="card__desc">${project.description}</p>
    `
    
    imgWrap.append(projectsTypes(project))

    element.prepend(imgWrap)

    return element
}

export default projectsArticle