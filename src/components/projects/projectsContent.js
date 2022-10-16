import projectsArticle from "./projectsArticle.js"

let projectsContent = function() {

    let element = document.createElement('div')
    element.classList.add("projects")

    let elementInner = document.createElement('div')
    elementInner.classList.add("projectsInner", "flex")
    element.append(elementInner)

    let btn = document.createElement('button')
    btn.classList.add("nextPage", "projects__nav")
    element.prepend(btn)
    btn.innerText = "next"

    var pageNum = 1
    var pageSize = 3

    var baseUrl = 'https://cryptic-genre-365612.appspot.com/api/projects'
    var url = 'https://cryptic-genre-365612.appspot.com/api/projects?populate=*&pagination[page]=1&pagination[pageSize]=' + pageSize + '&sort=updatedAt%3Adesc'


    btn.onclick = function() {
        fetch(baseUrl)
            .then(response => response.json())
            .then((data) => { 

            var pagesTotal = data.meta.pagination.total / pageSize

            pageNum < pagesTotal ? pageNum++ : pageNum = 1
        
            url = 'https://cryptic-genre-365612.appspot.com/api/projects?populate=*&pagination[page]=' + pageNum + '&pagination[pageSize]=' + pageSize + '&sort=updatedAt%3Adesc';

        sendRequest();

        })
        
    }


    function sendRequest() {
        fetch(url)
            .then(response => response.json())
            .then((projects) => {
                
                elementInner.innerHTML = ``

                projects.data.forEach(project => {
                    let projectAtt = Object.keys(project.attributes).reduce((accumulator, key) => {
                        accumulator[key.toLowerCase()] = project.attributes[key];
                        return accumulator;
                    }, {});

                    elementInner.append(projectsArticle(projectAtt))
                })

            })

    }
    sendRequest()

    return element
}

export default projectsContent