import projectsArticle from "./projectsArticle.js"

let projectsContent = function() {

    let element = document.createElement('div')
    element.classList.add("projects", "flex")

    fetch("https://cryptic-genre-365612.appspot.com/api/projects?populate=*")
        .then(response => response.json())
        .then((projects) => {

            let section = document.getElementById("projects")
            let sectionTitle = document.createElement("h1")
            sectionTitle.classList.add("section__title")
            sectionTitle.innerText = "My Strapi Api"
            section.prepend(sectionTitle)

            projects.data.slice(-3).forEach(project => {

                let projectAtt = Object.keys(project.attributes).reduce((accumulator, key) => {
                    accumulator[key.toLowerCase()] = project.attributes[key];
                    return accumulator;
                }, {});

                element.append(projectsArticle(projectAtt))
            })

        })

    return element
}

export default projectsContent