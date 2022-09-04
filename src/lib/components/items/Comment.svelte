<script lang="ts">
	import type { Item } from '$typings/index';
	import { calculateAndFormatTimeDifference } from '$utils/time';
	import AnimatedLink from '../AnimatedLink.svelte';

	export let data: Item;
	if (data.type !== 'comment') throw new Error('Not a comment');

	const timeDifference = calculateAndFormatTimeDifference(data.time);
	const { text, by: author, id } = data;
</script>

<div class="comment">
	<div class="comment-info">
		<AnimatedLink href={`/users/${author}`}><h4>{author}</h4></AnimatedLink>
		{#if timeDifference}
			<small>{timeDifference}</small>
		{/if}
	</div>
	{@html text}
</div>

<style>
	.comment {
		padding: 20px 12px;
		border-radius: 12px;
		background-color: var(--primarySubtleBackground);
		max-width: 80ch;
	}

	.comment-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 12px;
	}

	.comment-info h4 {
		margin: 0;
	}
</style>
