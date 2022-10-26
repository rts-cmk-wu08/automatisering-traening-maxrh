import contactForm from "./contactForm.js"


let contactSection = function() {

    let element = document.createElement('section')
    element.setAttribute('id', 'contact')
    element.classList.add("section", "container", "is-fullhd")

    element.append(contactForm())


    return element

}

export default contactSection