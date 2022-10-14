import advContent from "./advContent.js"

let advSection = function() {

    let element = document.createElement('section')
    element.classList.add("section-advantages")

    element.append(advContent())

    return element

   
}

export default advSection