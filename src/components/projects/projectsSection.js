import projectsContent from "./projectsContent.js"

let projectsSection = function() {

    let element = document.createElement('section')
    element.setAttribute('id', 'projects')
    element.classList.add("section", "container", "is-fullhd")

    let sectionTitle = document.createElement("h1")
    sectionTitle.classList.add("section__title")
    sectionTitle.innerText = "My Strapi Api"

    



    
    element.append(sectionTitle)
    element.append(projectsContent())

    return element

}

export default projectsSection