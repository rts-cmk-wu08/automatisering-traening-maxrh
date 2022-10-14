import sitesContent from "./sitesContent.js"

let sitesSection = function() {

    let element = document.createElement('section')
    element.classList.add("section-sites")
  
    element.append(sitesContent())

    return element

}

export default sitesSection