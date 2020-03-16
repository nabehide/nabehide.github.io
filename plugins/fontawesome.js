import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faChevronDown,
  faExternalLinkAlt,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons'

import {
  faApple,
  faGithub,
  faGooglePlay,
  faSoundcloud,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(
  faChevronDown,
  faExternalLinkAlt,
  faGlobe,

  faApple,
  faGithub,
  faGooglePlay,
  faSoundcloud,
  faTwitter,
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
