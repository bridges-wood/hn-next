<script lang="ts">
	import Footer from '$lib/footer/Footer.svelte';
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
		html {
			font-family: 'Roboto', sans-serif;
			font-size: 16px;
			line-height: 1.5;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
		}
	</style>
</svelte:head>
<main>
	<slot />
</main>
<Footer />
