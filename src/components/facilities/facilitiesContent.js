import facilitiesArticle from "./facilitiesArticle.js"

let facilitiesContent = function() {

    let element = document.createElement('div')
    element.classList.add("wrap")

    fetch("http://localhost:4000/facilities")
        .then(response => response.json())
        .then((facilities) => {
           
            let section = document.querySelector(".section-facilities")
            let sectionTitle = document.createElement("h1")
            sectionTitle.classList.add("section-headline")
            sectionTitle.innerText = facilities.headline
            section.prepend(sectionTitle)

            facilities.options.forEach(facility => {
                element.append(facilitiesArticle(facility))
            })
        })
        
    return element
}

export default facilitiesContent