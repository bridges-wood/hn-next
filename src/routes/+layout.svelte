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
</svelte:head>
<SvelteTheme />
<div class="main-container" data-sveltekit-prefetch>
	<Header />
	<slot />
	<Footer />
</div>

<style>
	.main-container {
		display: grid;
		place-items: center;
	}
</style>
