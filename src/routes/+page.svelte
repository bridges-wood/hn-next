<script lang="ts">
	import Stories from '$lib/components/stories/Stories.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Hacker News Next</title>
</svelte:head>
<h1>Hacker News Next</h1>
<Stories stories={data.stories} />

<style>
</style>
