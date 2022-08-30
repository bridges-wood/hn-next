<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
	import SvelteTheme from 'svelte-themes/SvelteTheme.svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href={`/main.css`} />
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
<SvelteTheme />
<main>
	<slot />
</main>
<ThemeSwitch />
<Footer />
