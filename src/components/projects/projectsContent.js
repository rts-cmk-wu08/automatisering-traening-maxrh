import projectsArticle from "./projectsArticle.js"
import projectsNav from "./projectsNav.js"

let projectsContent = function() {

    let element = document.createElement('div')
    element.classList.add("projects")

    let elementInner = document.createElement('div')
    elementInner.classList.add("projects__content", "flex")
    element.append(elementInner)
    
    let btn = document.createElement('button')
    btn.classList.add("nextPage", "projects__next")
    element.append(btn)
    btn.innerText = "next page"
   
    var baseUrl = 'https://cryptic-genre-365612.appspot.com'
    var url = baseUrl + '/api/projects?populate=*&sort=updatedAt%3Adesc'
    

    async function sendRequest() {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((entries) => {          

                element.prepend(projectsNav())

                let length = entries.data.length
                let size = 3
                let start = 0
                let end = start + size
                    

                btn.onclick = function() { 
                    end >= length ? start = 0 : start = start + size 
                    end = start + size

                    slider()
                }

             
                function slider() {

                    elementInner.innerHTML = ``
                    //console.log(entries.data[2].attributes.types.data.find( attributes.Name === "Foto"))

                   // console.log(entries.data.find(attributes.types => attributes.types.name === "Foto" ))

                    entries.data.slice(start, end).forEach(entry => {
                        let entryAtt = Object.keys(entry.attributes).reduce((accumulator, key) => {
                            accumulator[key.toLowerCase()] = entry.attributes[key];
                            return accumulator;
                        }, {});


                        //entryAtt.types.data.forEach()

                        //console.log(entryAtt.types.data)



                        elementInner.append(projectsArticle(entryAtt))
                    })
                }
                slider()








            })
    }
    sendRequest()


    // btn.onclick = function() {
    //     fetch(baseUrl + '/api/projects?populate=types', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //     })
    //         .then(response => response.json())
    //         .then(entries => { 
                
    //             var pagesTotal = entries.meta.pagination.total / pageSize
                
    //             pageNum < pagesTotal ? pageNum++ : pageNum = 1

    //             url = 'https://cryptic-genre-365612.appspot.com/api/projects?populate=*&pagination[page]=' + pageNum + '&pagination[pageSize]=' + pageSize + '&sort=updatedAt%3Adesc';

    //         sendRequest();
    //     })
    // }


    return element
}



export default projectsContent