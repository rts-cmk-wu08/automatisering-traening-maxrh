import facilitiesArticle from "./facilitiesArticle.js"

let facilitiesContent = function() {

    let element = document.createElement('div')
    element.classList.add('facilities', 'flex')

    fetch("http://localhost:4000/facilities")
        .then(response => response.json())
        .then((facilities) => {
           
            let section = document.getElementById("facilities")
            let sectionTitle = document.createElement("h1")
            sectionTitle.classList.add("section__title")
            sectionTitle.innerText = facilities.headline
            section.prepend(sectionTitle)

            facilities.options.forEach(facility => {
                element.append(facilitiesArticle(facility))
            })
        })
        
    return element
}

export default facilitiesContent