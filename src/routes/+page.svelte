<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Hacker News Next</title>
</svelte:head>
<h1>Hacker News Next</h1>
<div>
	{#each data.stories as story}
		<div>
			<h2>{story.title}</h2>
			<p>{story.id}</p>
			<a href={story.url}>{story.url}</a>
		</div>
	{/each}
</div>

<style>
</style>
