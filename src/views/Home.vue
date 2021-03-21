<template>
  <div class="card-container">
    <Top mainHeader="E-wallet" smallHeader="Active card" />
    <h4 v-if="!creditInfo">Select card provider!</h4>
    <Card v-else class="First-card" :creditInfo="creditInfo" />
    <CardStack @change-card="changeCard" />
    <router-link class="my-btn" :to="{ name: 'AddCard' }">Add new card</router-link>
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import Card from "@/components/Card.vue";
import CardStack from "@/components/CardStack.vue";

export default {
  name: "Home",
  components: { Top, Card, CardStack },

  data() {
    return {
      creditInfo: this.$root.$data.cards[0] && 0
    };
  },
  methods: {
    changeCard(card) {
      this.creditInfo = card;
    }
  }
};
</script>

<style lang="scss">
.card-container {
  width: 100%;
  margin: auto;
  padding: 2rem;
  max-width: 560px;
  background: #fff;

  .first-card {
    i {
      display: none;
    }
  }
  h4 {
    text-align: center;
  }

  .my-btn {
    padding: 20px;
    width: 80%;
    margin: auto;
    outline: none;
    display: block;
    border: 2px solid #000;
    text-align: center;
    border-radius: 5px;
    color: #000;
    transition: 0.5s;
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
      color: #fff;
      background: #000;
      transition: 0.7s;
      transform: scale(1.03);
      border-radius: 0 40px;
      width: 80%;
    }
  }
}
</style>