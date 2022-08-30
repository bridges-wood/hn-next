<script lang="ts">
	import type { Item } from '$typings/index';
	import { getPopulatedStories } from '$utils/api';
	import { onMount } from 'svelte';
	import Story from './Story.svelte';

	let intersecting: boolean = false;
	let element: HTMLElement;
	export let stories: Item[] = [];
	let newBatch: Item[] = [];
	let page = 1;
	let size = 20;

	const fetchData = async () => {
		newBatch = await getPopulatedStories('top', size, page * size);
	};

	onMount(() => {
		fetchData();
	});

	$: {
		if (intersecting) {
			page++;
			fetchData();
			stories = [...stories, ...newBatch];
		}
	}
</script>

<div class="stories__container">
	{#each stories as story}
		<Story {story} />
	{/each}
	<!-- <IntersectionObserver {element} bind:intersecting>
		<div bind:this={element} />
	</IntersectionObserver> -->
</div>

<style>
	.stories__container {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 10px;
	}
</style>
