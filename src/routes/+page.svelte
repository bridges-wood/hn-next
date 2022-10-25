<script lang="ts">
	import AnimatedLink from '$lib/components/AnimatedLink.svelte';
	import Comment from '$lib/components/items/Comment.svelte';
	import Poll from '$lib/components/items/Poll.svelte';
	import PollOpt from '$lib/components/items/PollOpt.svelte';
	import Story from '$lib/components/items/Story.svelte';
	import type { Errors, PageData } from './$types';

	export let data: PageData;
	export let errors: Errors;
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
<div class="items">
	{#each data?.items as child, index}
		{#if child.type === 'story'}
			<Story data={child} index={index}/>
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
</div>

<style>
	.title-section {
		text-align: center;
		max-width: 80ch;
		margin-bottom: 20px;
	}

	.title-section h1 {
		font-family: 'JetBrains Mono', monospace;
		font-size: 2.5rem;
		margin: 0;
	}

	.title-section p {
		font-family: 'Ubuntu', sans-serif;
		font-size: 1.25rem;
		margin: 0;
	}
	.items {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
</style>
