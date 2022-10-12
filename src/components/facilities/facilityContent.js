import facilityArticle from "./facilityArticle.js"

let facilityContent = function(items) {

    let element = document.createElement('div')
    element.classList.add("wrap")

    items.options.forEach(item => {
        element.append(facilityArticle(item))
    })

    return element
}

export default facilityContent