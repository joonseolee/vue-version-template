import vueCompositionApi, { createApp } from "@vue/composition-api";
import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.use(vueCompositionApi);

Vue.config.productionTip = false;

const app = createApp({ store, render: (h: any) => h(App)});
app.mount("#app");
