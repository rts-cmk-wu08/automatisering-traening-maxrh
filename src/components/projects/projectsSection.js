import projectsContent from "./projectsContent.js"

let projectsSection = function() {

    let element = document.createElement('section')
    element.setAttribute('id', 'projects')
    element.classList.add("section", "container", "is-fullhd")

    element.append(projectsContent())

    return element

}

export default projectsSection