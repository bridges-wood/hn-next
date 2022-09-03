<script lang="ts">
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
</script>

<header>
	<a href="/" class="home-link">
		<img src="/logo.svg" class="logo" alt="" />
	</a>
	<ThemeSwitch class="theme-switch" />
</header>

<style>
	header {
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		padding: 20px;
	}

	header :global(.theme-switch) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: auto;
	}

	@media (min-width: 1280px) {
		header {
			max-width: 1280px;
		}
	}
	@media (min-width: 1400px) {
		header {
			max-width: 1400px;
		}
	}

	.home-link {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.logo {
		height: 40px;
	}
</style>
