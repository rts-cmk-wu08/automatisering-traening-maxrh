import advSection from "./advSection.js"

let section = function() {

    let element = document.createElement('section')
    element.classList.add("advantages")

    element.innerHTML = `
            <h1>Our Advantages</h1>
        `
    element.append(advSection())

    return element

}

export default section