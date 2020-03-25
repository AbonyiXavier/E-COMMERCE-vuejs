<template>
  <div>
    <div>
      <a href>{{ category.categoryName }}</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Category",
  props: ["category"]
};
</script>
<style scoped>
.list-group a {
  text-decoration: none;
}

a {
  color: rgba(0, 0, 0, 0.54);
}

a:hover {
  color: black;
}
.fas {
  font-size: 9px;
  color: rgba(0, 0, 0, 0.54);
}

@media only screen and (max-width: 320px) {
  .list-group a {
    text-decoration: none;
    font-size: 12px;
  }
}
</style>
