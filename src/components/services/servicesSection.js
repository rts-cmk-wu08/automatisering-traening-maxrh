import servicesContent from "./servicesContent.js"

let servicesSection = function() {

    let element = document.createElement('section')
    element.classList.add("section-services")

    element.append(servicesContent())

    return element

}

export default servicesSection