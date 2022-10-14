import facilityContent from "./facilityContent.js"

let facilitySection = function() {

    let element = document.createElement('section')
    element.classList.add("advantages")

    element.innerHTML = `
            <h1 class="section-headline"></h1>
        `
    

    element.append(facilityContent())

    return element

}

export default facilitySection