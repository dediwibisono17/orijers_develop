<template>
    <div>
		<p>Kami hanya menjual jersey original langsung dari club tersebut</p>
		<h3>Temukan Club Anda</h3>
		<Logo />
		<div class="button">
            <router-link to="/list">
                <Button />
            </router-link>
        </div>
		<Slider />
    </div>
</template>

<script>
import Logo from './Logo.vue'
import Slider from './Slider.vue'
import Button from './Button.vue'
export default {
	components: {
		Logo,
		Slider,
		Button
	}
}
</script>

<style lang="scss" scoped>
	h1 {
		color: red;
	}
	.button {
		max-width:180px;
		margin:0 auto;
	}
</style>
