import heroArticle from "./heroArticle.js"

let heroContent = function() {

    let element = document.createElement('div')
    element.classList.add("wrap")

    fetch("http://localhost:4000/hero")
        .then(response => response.json())
        .then((hero) => {
            
            element.append(heroArticle(hero))
            
        })

    return element
}

export default heroContent