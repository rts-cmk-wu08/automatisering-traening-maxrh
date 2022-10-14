import "./index.scss"

import advSection from "./components/advantages/advSection.js"
import sitesSection from "./components/sites/sitesSection.js"
import facilitiesSection from "./components/facilities/facilitiesSection.js"
import servicesSection from "./components/services/servicesSection.js"
import heroSection from "./components/hero/heroSection.js"


let wrapperElm = document.querySelector(".wrapper")

wrapperElm.append(heroSection())
wrapperElm.append(servicesSection())
wrapperElm.append(facilitiesSection())
wrapperElm.append(sitesSection())
wrapperElm.append(advSection())
