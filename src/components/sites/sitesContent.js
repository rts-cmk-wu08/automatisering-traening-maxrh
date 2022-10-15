import sitesArticle from "./sitesArticle.js"

let sitesContent = function(items) {

    let element = document.createElement('div')
    element.classList.add("sites", "flex")

    fetch("http://localhost:4000/sites")
        .then(response => response.json())
        .then((sites) => {

            element.innerHTML = `
                <div class="flex-start">
                    <h1 class="section__title">${sites.headline}</h1>
                    <p class="section__desc">${sites.text}</p>
                    <button class="button is-primary is-medium" href="#"><img class="btn-icon"src="${sites.btnicon}"/> Start</button>
                </div>
            `
        
            sites.options.forEach(site => {
                element.append(sitesArticle(site))
            })
        })

    return element
}

export default sitesContent