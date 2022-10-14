import advContent from "./advContent.js"

let advSection = function() {

    let element = document.createElement('section')
    element.classList.add("advantages")

    element.innerHTML = `
            <h1 class="section-headline"></h1>
        `


   

    element.append(advContent())

    return element

   
}

export default advSection