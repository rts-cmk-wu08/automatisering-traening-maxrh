import heroContent from "./heroContent.js"

let heroSection = function() {

    let element = document.createElement('section')
    element.classList.add("section-hero")

    element.append(heroContent())

    return element

}

export default heroSection