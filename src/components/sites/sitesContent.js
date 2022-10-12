import sitesArticle from "./sitesArticle.js"

let sitesContent = function(items) {

    let element = document.createElement('div')
    element.classList.add("wrap")

    element.innerHTML = `
        <div class="section-intro">
            <h1 class="section-headline">${items.headline}</h1>
            <p>${items.text}</p>
            <button class="btn" href="#"><img class="btn-icon"src="${items.btnicon}"/> Start</button>

        </div>
    `


    items.options.forEach(item => {
        element.append(sitesArticle(item))
    })

    return element
}

export default sitesContent