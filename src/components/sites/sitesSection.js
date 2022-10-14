import sitesContent from "./sitesContent.js"

let sitesSection = function() {

    let element = document.createElement('section')
    element.setAttribute('id', 'sites')
    element.classList.add("section")
  
    element.append(sitesContent())

    return element

}

export default sitesSection