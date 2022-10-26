import "./index.scss"

import projectsSection from "./components/projects/projectsSection.js"
import contactSection from "./components/form/contactSection.js"
import advSection from "./components/advantages/advSection.js"
import sitesSection from "./components/sites/sitesSection.js"
import facilitiesSection from "./components/facilities/facilitiesSection.js"
import servicesSection from "./components/services/servicesSection.js"
import heroSection from "./components/hero/heroSection.js"

const mainElm = document.getElementById("main")

mainElm.append(heroSection())

mainElm.append(contactSection())

mainElm.append(projectsSection())
mainElm.append(servicesSection())
mainElm.append(facilitiesSection())
mainElm.append(sitesSection())
mainElm.append(advSection())


