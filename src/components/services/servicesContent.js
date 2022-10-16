import servicesArticle from "./servicesArticle.js"

let servicesContent = function() {

    let element = document.createElement('div')
    element.classList.add("services", "flex")

    fetch("http://localhost:4000/services")
        .then(response => response.json())
        .then((services) => {

            services.forEach(service => {
                element.append(servicesArticle(service))
            })
        })

    return element
}

export default servicesContent