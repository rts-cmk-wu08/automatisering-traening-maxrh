import heroArticle from "./heroArticle.js"

let heroContent = function(hero) {

    let element = document.createElement('div')
    element.classList.add("wrap")

    element.append(heroArticle(hero))

    return element
}

export default heroContent