<template>
  <div class="card-container">
    <Top mainHeader="Configure Card" smallHeader="New card" />
    <Card class="first-card" :creditInfo="creditInfo" />
    <CardForm @change-vendor="changeVendor" :creditInfo="creditInfo" />
  </div>
</template>

<script>
import Top from "@/components/Top.vue";
import Card from "@/components/Card.vue";
import CardForm from "@/components/CardForm.vue";

export default {
  name: "AddCard",
  components: { Top, Card, CardForm },
  data: () => ({
    creditInfo: {
      id: Date.now(),
      chip: require("@/assets/chip-dark.svg"),
      vendor: require("@/assets/vendor-evil.svg"),
      cardNr: "",
      owner: "",
      month: "",
      year: "",
      optionsVendor: null,
      backgroundColor: "#999"
    }
  }),
  methods: {
    changeVendor(vendor) {
      if (vendor === "ninja-bank") {
        this.creditInfo.backgroundColor = "#000";
        this.creditInfo.vendor = require("@/assets/vendor-ninja.svg");
        this.creditInfo.chip = require("@/assets/chip-light.svg");
      }
      if (vendor === "bitcoin-inc") {
        this.creditInfo.backgroundColor = "#ffb649";
        this.creditInfo.vendor = require("@/assets/vendor-bitcoin.svg");
      }
      if (vendor === "blockchain-inc") {
        this.creditInfo.backgroundColor = "#7C4FDF";
        this.creditInfo.vendor = require("@/assets/vendor-blockchain.svg");
      }
      if (vendor === "evil-corp") {
        this.creditInfo.backgroundColor = "#D92E4C";
        this.creditInfo.vendor = require("@/assets/vendor-evil.svg");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
</style>