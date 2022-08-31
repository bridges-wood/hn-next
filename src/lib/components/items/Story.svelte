<script lang="ts">
	import AnimatedLink from '$lib/components/AnimatedLink.svelte';
	import type { Item } from '$typings/index';
	import { calculateTimeDifference, formatTimeDifference } from '$utils/time';

	export let data: Item;
	let formattedTimeDifference: string;
	try {
		const timeGap = calculateTimeDifference(data.time);
		formattedTimeDifference = formatTimeDifference(timeGap);
	} catch (error) {
		console.log(error);
	}
</script>

<div class="story">
	<h3 class="story__title">
		<AnimatedLink href={data.url}>
			{data.title}
		</AnimatedLink>
	</h3>
	<small class="story__subtext">
		{#if data.score}
			{data.score} {data.score === 1 ? 'point' : 'points'}
		{/if}
		{#if data.by}
			by {data.by}
		{/if}
		{#if formattedTimeDifference}
			{formattedTimeDifference}
		{/if}
		{#if data.descendants}
			| <AnimatedLink href={`/items/${data.id}`}>
				{data.descendants}
				{data.descendants === 1 ? 'comment' : 'comments'}
			</AnimatedLink>
		{/if}
	</small>
	<!-- {#if story.text}
		{@html story.text}
	{/if} -->
</div>

<style>
	.story {
		padding: 20px 12px;
		border-radius: 12px;
		background-color: var(--primarySubtleBackground);
		max-width: 80ch;
	}

	.story__title {
		margin: 0;
		font-size: 16px;
	}

	.story__subtext {
		font-size: 12px;
		color: var(--neutralLowContrastText);
	}
</style>
