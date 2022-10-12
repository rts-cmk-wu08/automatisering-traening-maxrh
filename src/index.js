import "./index.scss"

import advSection from "./components/advantages/advSection.js"
import sitesSection from "./components/sites/sitesSection.js"
import facilitySection from "./components/facilities/facilitySection.js"
import servicesSection from "./components/services/servicesSection.js"
import heroSection from "./components/hero/heroSection.js"


let element = document.querySelector(".main")

// element.append(hero())
element.append(heroSection())
element.append(servicesSection())
element.append(facilitySection())
element.append(sitesSection())
element.append(advSection())
