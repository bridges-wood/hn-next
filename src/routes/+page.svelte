<script lang="ts">
	import Story from '$lib/components/Story.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Hacker News Next</title>
</svelte:head>
<h1>Hacker News Next</h1>
<div>
	{#each data.stories as story}
		<Story {story} />
	{/each}
</div>

<style>
</style>
