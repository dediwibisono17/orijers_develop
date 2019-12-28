<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      Halo, Orijers hanya menjual jersey original langsung dari club nya.
    </p>
  </div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: String
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
  padding: 24px;
  h1 {
    padding: 0;
    margin: 0;
  }
}
a {
  color: #42b983;
}
</style>
