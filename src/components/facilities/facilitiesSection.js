import facilitiesContent from "./facilitiesContent.js"

let facilitiesSection = function() {

    let element = document.createElement('section')
    element.classList.add("section-facilities")

    element.append(facilitiesContent())

    return element

}

export default facilitiesSection