import { advantages } from "../../data.js"
import advContent from "./advContent.js"

let advSection = function() {

    let element = document.createElement('section')
    element.classList.add("advantages")

    element.innerHTML = `
            <h1 class="section-headline">${advantages.headline}</h1>
        `

    element.append(advContent(advantages))

    return element

}

export default advSection