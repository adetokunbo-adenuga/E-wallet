<template>
  <div class="top">
    <h1>{{mainHeader}}</h1>
    <p>{{smallHeader}}</p>
  </div>
</template>

<script>
export default {
  name: "Top",
  props: ["mainHeader", "smallHeader"]
};
</script>

<style lang="scss" scoped>
.top {
  text-align: center;
}
h1 {
  margin-bottom: 2rem;
}
p {
  margin-bottom: 0.5rem;
}
</style>