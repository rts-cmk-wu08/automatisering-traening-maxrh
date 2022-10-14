import facilityArticle from "./facilityArticle.js"

let facilityContent = function() {

    let element = document.createElement('div')
    element.classList.add("wrap")

    fetch("http://localhost:4000/advantages")
        .then(response => response.json())
        .then((facilities) => {

            facilities.options.forEach(facility => {
                element.append(advArticle(facility))
            })
        })

        
    items.options.forEach(item => {
        element.append(facilityArticle(item))
    })

    return element
}

export default facilityContent