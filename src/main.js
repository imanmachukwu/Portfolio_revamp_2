import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPrismic } from "@prismicio/vue";

/* const prismic = createPrismic({
  client: {
    endpoint: "https://imanma.cdn.prismic.io/api/v2",
    accessToken:
      "MC5aZFpiUEJFQUFDRUFLWW54.IWrvv700aDg6Cu-_vRnvv70FHhjvv71WOnrvv73vv71577-9He-_ve-_vXkXUu-_vXs8fg",
    routes: router,
  },
}); */

const prismic = createPrismic({
  endpoint: "https://imanma.cdn.prismic.io/api/v2",
  Client: {
    endpoint: "https://imanma.cdn.prismic.io/api/v2",
    accessToken:
      "MC5aZFpiUEJFQUFDRUFLWW54.IWrvv700aDg6Cu-_vRnvv70FHhjvv71WOnrvv73vv71577-9He-_ve-_vXkXUu-_vXs8fg",
    routes: router,
  },
});

console.log(prismic);

createApp(App).use(router).use(prismic).mount("#app");
