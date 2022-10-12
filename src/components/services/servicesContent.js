import servicesArticle from "./servicesArticle.js"

let servicesContent = function(items) {

    let element = document.createElement('div')
    element.classList.add("wrap")

    items.forEach(item => {
        element.append(servicesArticle(item))
    })

    return element
}

export default servicesContent