<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import SvelteTheme from 'svelte-themes/SvelteTheme.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
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
	<link rel="icon" href="/favicon.ico" />
</svelte:head>
<SvelteTheme />
<div class="main-container" data-sveltekit-prefetch>
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style>
	.main-container {
		display: grid;
		place-items: center;
		width: 100%;
	}

	main {
		max-width: 100%;
		width: 100%;
		display: grid;
		place-items: center;
		min-height: calc(100vh - 40px);
	}

	@media (max-width: 768px) {
		main {
			width: 90%;
		}
	}

	@media (min-width: 1280px) {
		main {
			max-width: 1280px;
		}
	}
	@media (min-width: 1400px) {
		main {
			max-width: 1400px;
		}
	}
</style>
