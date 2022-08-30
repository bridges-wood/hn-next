<script lang="ts">
	import themeStore from 'svelte-themes';
</script>

<select bind:value={$themeStore.theme}>
	<option value="light">Light</option>
	<option value="dark">Dark</option>
</select>
