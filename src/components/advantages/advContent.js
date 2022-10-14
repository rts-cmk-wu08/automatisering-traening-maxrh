import advArticle from "./advArticle.js"
// import "./advSection.scss"

let advContent = function() {

    let element = document.createElement('div')
    element.classList.add("wrap")
   
    fetch("http://localhost:4000/advantages")
        .then(response => response.json())
        .then((advantages) => {

            advantages.options.forEach(advantage => {
                element.append(advArticle(advantage))
            })

        })

    return element
}

export default advContent