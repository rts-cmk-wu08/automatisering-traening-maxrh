import facilitiesContent from "./facilitiesContent.js"

let facilitiesSection = function() {

    let element = document.createElement('section')
    element.setAttribute('id', 'facilities')
    element.classList.add("section")

    element.append(facilitiesContent())

    return element

}

export default facilitiesSection