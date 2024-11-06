<template>
  <div>
    <div class="container wrapper">
      <div class="w-full px-4 flex justify-between items-center mb-6">
        <!-- Left Logo -->
        <div class="logos-dimintions">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Left Logo"
            class="h-12"
          />
        </div>

        <!-- Right Logo -->
        <div class="logos-dimintions">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Right Logo"
            class="h-12"
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
