<script lang="ts">
	import AnimatedLink from '$lib/components/AnimatedLink.svelte';
	import Comment from '$lib/components/items/Comment.svelte';
	import { calculateAndFormatTimeDifference } from '$utils/time';
	import type { PageData } from './$types';

	export let data: PageData;

	const timeDifference = calculateAndFormatTimeDifference(data.item.time);
	const { title, url, score, by: author, descendants, id, type } = data.item;
</script>

<svelte:head>
	<title>HN Next &VerticalLine; {data?.item.title}</title>
</svelte:head>
<AnimatedLink href={data.item.url}><h1>{data?.item.title}</h1></AnimatedLink>
<small class="item__subtext">
	{#if score}
		{score} {score === 1 ? 'point' : 'points'}
	{/if}
	{#if author}
		by <AnimatedLink href={`/users/${author}`}>{author}</AnimatedLink>
	{/if}
	{#if timeDifference}
		{timeDifference}
	{/if}
	{#if descendants}
		| <AnimatedLink href={`/items/${id}`}>
			{descendants}
			{descendants === 1 ? 'comment' : 'comments'}
		</AnimatedLink>
	{/if}
</small>
{#if data?.item.text}
	<div class="text">
		{@html data.item.text}
	</div>
{/if}
{#if data?.kids}
	<div class="comments">
		{#each data?.kids.sort((a, b) => Number(b.time) - Number(a.time)) as child}
			{#if child.type === 'comment' && child.text}
				<Comment data={child} />
			{/if}
		{/each}
	</div>
{/if}

<style>
	.comments {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.text {
		max-width: 80ch;
	}

	.item__subtext {
		font-size: 12px;
		color: var(--neutralLowContrastText);
		margin-bottom: 12px;
	}
</style>
