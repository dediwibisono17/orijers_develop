<template>
  <div id="app">
    <div class="container">
    <!-- <img alt="Vue logo" src="./assets/image/logo-test.jpg" width="120"> -->
      <h1>orijers</h1>
      <router-view />
    </div>
    <div class="copyright">
      &copy; 2019 Orijers
    </div>
  </div>
</template>

<script>

export default {
	name: 'app',
	components: {
	}
}
</script>

<style lang="scss">
  h1 {
    padding: 0;
    margin: 0;
  }
  .copyright {
    margin: 16px 0 0;
    padding: 8px 0;
    font-size: 12px;
  }
</style>
