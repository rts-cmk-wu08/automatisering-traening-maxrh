import heroContent from "./heroContent.js"

let heroSection = function() {

    const element = document.createElement('section')
    element.setAttribute('id', 'hero')
    element.classList.add("section")

    element.append(heroContent())

    return element

}

export default heroSection