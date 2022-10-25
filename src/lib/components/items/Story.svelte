<script lang="ts">
	import AnimatedLink from '$lib/components/AnimatedLink.svelte';
	import type { Item } from '$typings/index';
	import { calculateAndFormatTimeDifference } from '$utils/time';
	import ThumbUp from '$lib/components/icons/ThumbUp.svelte';
	import Comment from '$lib/components/icons/Comment.svelte';

	export let data: Item;
	export let index: number;
	const timeDifference = calculateAndFormatTimeDifference(data.time);
	const { title, url, score, by: author, descendants, id } = data;

	const getDomain = (url: string) => {
		const urlObj = new URL(url);
		return urlObj.hostname;
	};
	
</script>

<div class="story">
	<div class='story__position'>
		<h3>{index + 1}</h3>
	</div>
	<div class='story__body'>
		<h3 class="story__title">
			<AnimatedLink href={url !== undefined ? url : `/items/${id}`}>
				{title}
			</AnimatedLink>
		</h3>
		<div class='story__attribution'>
			{#if url !== undefined}
				<AnimatedLink href={url} target="_blank" rel="noopener noreferrer" class="story__domain">
					{getDomain(url)}
				</AnimatedLink>
				{/if}
			<small class='author'>
				{#if timeDifference}
				{timeDifference}
			{/if}
			{#if author}
			<span>
				- <AnimatedLink href={`/users/${author}`}>{author}</AnimatedLink>
			</span>
			{/if}
			</small>
		</div>
		<div class="story__stats">
			{#if score}
			<span class="story_points"><ThumbUp/> <span>{score}</span> </span>
			{/if}
			{#if descendants}
				<AnimatedLink href={`/items/${id}`} class='story__comments'>
					<Comment/> <span>{descendants}</span>
				</AnimatedLink>
			
			{/if}
		</div>
	</div>
</div>

<style>
	.story {
		padding:12px 12px;
		border-radius: 12px;
		background-color: var(--primarySubtleBackground);
		max-width: 80ch;
		display: grid;
		grid-template-columns: minmax(min-content, auto) 1fr;
		grid-template-rows: 1fr;
		column-gap: 20px;
	}

	.story__body {
		display: flex;
		flex-direction: column;
	}

	.story__attribution {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: 10px;	
	}

	.author {
		white-space: nowrap;
	}

	.story__title {
		margin: 0;
		font-size: 16px;
	}

	:global(.story__domain) {
		font-size: 14px;
		color: var(--neutralLowContrastText);
		text-overflow: ellipsis;
		overflow: hidden;
	}

	.story__stats {
		margin-top: 10px;
		display: flex;
		flex-direction: row;
		gap: 50px;
	}

	.story__position {
		margin-top: 12px;
		display: grid;
		place-items: center;
		background-color: var(--neutralHighContrastText);
		color: var(--primaryBackground);
		height: 24px;
		min-width: 24px;
		border-radius: 20px;
	}

	:global(.story__comments), :global(.story_points) {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 4px;
		
	}

	.story__position h3 {
		margin: 0;
		font-size: 16px;
		line-height: 16px;
		margin: 0 6px;
	}
</style>
