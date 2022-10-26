let contactForm = function() {

    let element = document.createElement('form')
    element.classList.add('contactForm')

    element.innerHTML = `

            <h3>MyForm</h3><br>
            <div class="fieldgroup">
                <div class="fieldgroup__item">
                    <label for="fname">Fornavn:</label>
                    <input type="text" name="fname" id="fname" required minlength=2/>
                </div>
                <div class="fieldgroup__item">
                    <label for="lname">Efternavn:</label>
                    <input type="text" name="lname" id="lname" required minlength=2/>
                </div>
            </div>
            <div class="fieldgroup">
                <div class="fieldgroup__item">
                    <label for="adresse">Adresse:</label>
                    <input type="text" name="adresse" id="adresse"/>
                </div>
            </div>
            <div class="fieldgroup">
                <div class="fieldgroup__item">
                    <label for="zip">Postnr:</label>
                    <input type="text" inputmode="numeric" name="zip" id="zip"/>
                </div>
                <div class="fieldgroup__item">
                    <label for="city">By:</label>
                    <input type="text" name="city" id="city"/>
                </div>
            </div>
            <div class="fieldgroup">
                <div class="fieldgroup__item">
                    <label for="phone">Telefon:</label>
                    <input type="phone" name="phone" id="phone" required/>
                </div>
            </div>
            <div class="fieldgroup">
                <div class="fieldgroup__item">
                    <label for="email">Email:</label>
                    <input type="email" name="email" id="email" required pattern="^[^\s@]+@[^\s@]+\.[^\s@]{2,}$"/>
                </div>
            </div>
            <div class="fieldgroup">
                <div class="fieldgroup__item">
                    <label for="message">Besked:</label>
                    <textarea id="message" name="message" rows="5" required minlength=10></textarea>
                </div>
            </div>
            
            <input class="btn" type="submit" value="Send">
            


        `

    element.addEventListener("submit", function(e) {
        e.preventDefault()

        let data = {
            Firstname: e.target.fname.value,
            Lastname: e.target.lname.value,
            Adresse: e.target.adresse.value,
            Postnr: e.target.zip.value,
            By: e.target.city.value,
            Telefon: e.target.phone.value,
            Email: e.target.email.value,
            Besked: e.target.message.value
        }

        console.log(data)

    })


    return element

}

export default contactForm