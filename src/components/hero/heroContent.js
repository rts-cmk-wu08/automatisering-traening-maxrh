let heroContent = function() {

    let element = document.createElement('div')
    element.classList.add("hero")

    fetch("http://localhost:4000/hero")
        .then(response => response.json())
        .then((hero) => {

            element.innerHTML = `
                <img class="hero__img" src="${hero.image}" alt="${hero.headline}"/>
                <div class="hero__box box">
                    <h4 class="hero__headline">${hero.headline}</h4>
                    <p class="hero__description">${hero.copy}</p>
                </div>
            `
            
        })

    return element
}

export default heroContent