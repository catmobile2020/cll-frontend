<template>
  <div>
    <div class="container wrapper">
      <div class="w-full px-4 flex justify-between items-center mb-6">
        <!-- Left Logo -->
        <div class="logos-dimintions">
          <img
            src="../public/conf-logo.png"
            alt="Left Logo"
            class="h-15 w-[250px]"
            
          />
        </div>

        <!-- Right Logo -->
        <div class="logos-dimintions">
          <img
            src="../public/logo1.png"
            alt="Right Logo"
            class="h-15  sm:w-[150px] w-[100px]"
          />
        </div>
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
