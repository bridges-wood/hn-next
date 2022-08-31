<script lang="ts">
	import AnimatedLink from '$lib/components/AnimatedLink.svelte';
	import Comment from '$lib/components/items/Comment.svelte';
	import Poll from '$lib/components/items/Poll.svelte';
	import PollOpt from '$lib/components/items/PollOpt.svelte';
	import Story from '$lib/components/items/Story.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>Hacker News Next</title>
</svelte:head>
<div class="title-section">
	<h1>Hacker News Next</h1>
	<p>
		<AnimatedLink href="https://news.ycombinator.com/news">Hacker News</AnimatedLink>, redesigned.
	</p>
</div>
<main>
	{#each data?.items as child}
		{#if child.type === 'story'}
			<Story data={child} />
		{/if}
		{#if child.type === 'comment'}
			<Comment data={child} />
		{/if}
		{#if child.type === 'poll'}
			<Poll data={child} />
		{/if}
		{#if child.type === 'pollopt'}
			<PollOpt data={child} />
		{/if}
	{/each}
</main>

<style>
	.title-section {
		text-align: center;
		max-width: 80ch;
		margin-bottom: 20px;
	}

	.title-section h1 {
		font-size: 2.5rem;
		margin: 0;
	}

	.title-section p {
		font-size: 1.25rem;
		margin: 0;
	}
	main {
		display: flex;
		flex-direction: column;
		gap: 12px;
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
