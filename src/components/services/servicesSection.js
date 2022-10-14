import servicesContent from "./servicesContent.js"

let servicesSection = function() {

    let element = document.createElement('section')
    element.setAttribute('id', 'services')
    element.classList.add("section")

    element.append(servicesContent())

    return element

}

export default servicesSection