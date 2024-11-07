<template>
  <div>
    <div class="container wrapper">
      <div class="flex justify-center items-center mb-6 mt-6 px-4">
        <img
          src="../public/conf-logo.png"
          alt="Centered Logo"
          class="h-15 w-[250px]"
        />
      </div>
      
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@media (min-width: 1536px) {
  .container {
    max-width: 1316px !important;
  }
}
#app {
  font-family: "Verdana", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.logos-dimintions {
  margin-top: 5%;
}
.wrapper {
  margin: auto;
}
</style>
