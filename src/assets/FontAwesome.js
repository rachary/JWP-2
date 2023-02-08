import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMapLocationDot, faDungeon, faBullhorn, faMap, faUtensils, faBagShopping, faCampground, faBriefcase, faToriiGate, faSignsPost, faLocationDot, faPhone, faEnvelope, faMagnifyingGlass, faMonument } from "@fortawesome/free-solid-svg-icons";
import { faCalendarPlus, faComments } from "@fortawesome/free-regular-svg-icons"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

library.add(faMapLocationDot, faDungeon, faBullhorn, faMap, faCalendarPlus, faComments, faUtensils, faBagShopping, faCampground, faBriefcase, faToriiGate, faSignsPost, faLocationDot, faPhone, faEnvelope, faFacebook, faInstagram, faMagnifyingGlass, faMonument);

export default {
	install(app) {
		app.component('fa-icon', FontAwesomeIcon)
	},
};
