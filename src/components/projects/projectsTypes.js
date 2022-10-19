let projectsTypes = function(project) {

    let types = project.types.data

    let element = document.createElement('div')
    element.classList.add('card__types')

    types.forEach(type => {

        let pill = document.createElement('span')
        pill.classList.add('card__types__pill')
        pill.innerText = type.attributes.Name
        element.append(pill)
        
    });


    return element
}

export default projectsTypes