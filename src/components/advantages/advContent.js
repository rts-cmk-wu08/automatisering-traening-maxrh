import advArticle from "./advArticle.js"
// import "./advSection.scss"

let advContent = function() {

    let element = document.createElement('div')
    element.classList.add('advantages', 'flex')
   
    fetch("http://localhost:4000/advantages")
        .then(response => response.json())
        .then((advantages) => {

            let section = document.getElementById("advantages")
            let sectionTitle = document.createElement("h1")
            sectionTitle.classList.add("section__title")
            sectionTitle.innerText = advantages.headline
            section.prepend(sectionTitle)

            advantages.options.forEach(advantage => {
                element.append(advArticle(advantage))
            })

        })

    return element
}

export default advContent