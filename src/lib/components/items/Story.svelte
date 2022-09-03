<script lang="ts">
	import AnimatedLink from '$lib/components/AnimatedLink.svelte';
	import type { Item } from '$typings/index';
	import { calculateAndFormatTimeDifference } from '$utils/time';

	export let data: Item;
	const timeDifference = calculateAndFormatTimeDifference(data.time);
	const { title, url, score, by: author, descendants, id } = data;
</script>

<div class="story">
	<h3 class="story__title">
		<AnimatedLink href={url}>
			{title}
		</AnimatedLink>
	</h3>
	<small class="story__subtext">
		{#if score}
			{score} {score === 1 ? 'point' : 'points'}
		{/if}
		{#if author}
			by {author}
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
