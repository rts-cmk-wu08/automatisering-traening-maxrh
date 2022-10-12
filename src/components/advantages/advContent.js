import advArticle from "./advArticle.js"

let advContent = function(items) {

    let element = document.createElement('div')
    element.classList.add("wrap")

    items.options.forEach(item => {
        element.append(advArticle(item))
    })

    return element
}

export default advContent