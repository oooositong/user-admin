<template>
  <div id="app">
    <nav class="main-nav">
      <b>User Admin Panel</b>
    </nav>

    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-size: 10px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}

.main-nav {
  height: 10rem;
  display: flex;
  background-color: #0A5A9F;
  justify-content: center;
  align-items: center;

  b {
    color: white;
    font-size: 3rem;
  }
}
</style>
