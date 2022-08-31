<script lang="ts">
	import ThemeSwitch from '$lib/components/ThemeSwitch.svelte';
</script>

<header>
	<ThemeSwitch class="theme-switch" />
</header>

<style>
	header {
		box-sizing: border-box;
		display: flex;
		flex-direction: row;
		width: 100%;
		padding: 20px;
	}

	header :global(.theme-switch) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: auto;
	}
</style>
