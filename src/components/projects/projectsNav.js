
let projectsNav = function() {

    let element = document.createElement('div')
    element.classList.add("projects__nav")

    let tabs = document.createElement('div')
    tabs.classList.add("breadcrumb", "has-dot-separator", "is-small")
    element.append(tabs)

    let items = document.createElement('ul')
    tabs.append(items)


        fetch('https://cryptic-genre-365612.appspot.com/api/types?populate=projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((entries) => {

                

                entries.data.forEach(entry => {
                    let item = document.createElement('li')
                    item.setAttribute("id", entry.attributes.Name )
                    items.append(item)

                    item.innerHTML = `
                        <a href="">${entry.attributes.Name} ( ${entry.attributes.projects.data.length} )</a>
                    
                    `

                    console.log(entry.attributes.projects.data)

                })



            })
    

    return element
}

export default projectsNav