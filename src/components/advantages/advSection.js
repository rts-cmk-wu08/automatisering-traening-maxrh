import advContent from "./advContent.js"

let advSection = function() {

    let element = document.createElement('section')
    element.setAttribute('id', 'advantages')
    element.classList.add("section", "container", "is-fullhd")

    element.append(advContent())

    return element

   
}

export default advSection