import { services } from "../../data.js"
import servicesContent from "./servicesContent.js"

let servicesSection = function() {

    let element = document.createElement('section')
    element.classList.add("services")

    element.append(servicesContent(services))

    return element

}

export default servicesSection