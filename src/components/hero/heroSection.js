import { hero } from "../../data.js"
import heroContent from "./heroContent.js"

let heroSection = function() {

    let element = document.createElement('section')
    element.classList.add("services")

    element.append(heroContent(hero))

    return element

}

export default heroSection