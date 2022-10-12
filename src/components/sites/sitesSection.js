import { sites } from "../../data.js"
import sitesContent from "./sitesContent.js"

let sitesSection = function() {

    let element = document.createElement('section')
    element.classList.add("sites")

  
    element.append(sitesContent(sites))

    return element

}

export default sitesSection