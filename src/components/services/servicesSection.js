import servicesContent from "./servicesContent.js"

let servicesSection = function() {

    let element = document.createElement('section')
    element.setAttribute('id', 'services')
    element.classList.add("section", "container", "is-fullhd")

    element.append(servicesContent())

    return element

}

export default servicesSection