import "./index.scss"

import advSection from "./components/advantages/advSection.js"
import sitesSection from "./components/sites/sitesSection.js"
import facilitySection from "./components/facilities/facilitySection.js"
import servicesSection from "./components/services/servicesSection.js"
import heroSection from "./components/hero/heroSection.js"


let wrapperElm = document.querySelector(".wrapper")
// let mainElm = document.createElement("div")
// mainElm.classList.add("main")
// wrapperElm.append(mainELm)

// element.append(hero())
wrapperElm.append(heroSection())
wrapperElm.append(servicesSection())
wrapperElm.append(facilitySection())
wrapperElm.append(sitesSection())
wrapperElm.append(advSection())
