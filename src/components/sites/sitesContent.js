import sitesArticle from "./sitesArticle.js"

let sitesContent = function(items) {

    let element = document.createElement('div')
    element.classList.add("wrap")

    fetch("http://localhost:4000/sites")
        .then(response => response.json())
        .then((sites) => {

            element.innerHTML = `
                <div class="sites-intro">
                    <h1 class="sites-info__headline">${sites.headline}</h1>
                    <p class="sites-info__description">${sites.text}</p>
                    <button class="btn" href="#"><img class="btn-icon"src="${sites.btnicon}"/> Start</button>
                </div>
            `

            sites.options.forEach(site => {
                element.append(sitesArticle(site))
            })
        })

    return element
}

export default sitesContent