import Vue from "vue";
import App from "./App.vue";
import router from "./router";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import icons */
import {
  faBars,
  faCirclePlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* add icons to the library */
library.add(faBars);
library.add(faCirclePlus);
library.add(faXmark);
/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
