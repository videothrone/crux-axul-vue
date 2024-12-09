import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  HiArrowNarrowRight,
  HiChevronUp,
  HiChevronDown,
} from "oh-vue-icons/icons";

addIcons(HiArrowNarrowRight, HiChevronUp, HiChevronDown);

const app = createApp(App);

app.use(router);
app.component("v-icon", OhVueIcon);
app.mount("#app");
