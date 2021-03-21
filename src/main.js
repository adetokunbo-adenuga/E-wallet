import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

new Vue({
  router,
  data: () => ({
    cards: []
  }),
  mounted() {
    if (localStorage.getItem("card-item")) {
      try {
        this.cards = JSON.parse(localStorage.getItem("card-item"));
      } catch (error) {
        console.log(error);
      }
    }
    this.$root.$on("add-card", card => {
      this.cards.push(card);
      const parsed = JSON.stringify(this.cards);
      localStorage.setItem("card-item", parsed);
    });
    this.$root.$on("delete-card", id => {
      this.cards = JSON.parse(localStorage.getItem("card-item"));
      this.cards = this.cards.filter(card => card.id != id);
      localStorage.setItem("card-item", JSON.stringify(this.cards));
    });
  },

  render: h => h(App)
}).$mount("#app");
