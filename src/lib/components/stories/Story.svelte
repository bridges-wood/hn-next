<script lang="ts">
	import AnimatedLink from '$lib/components/AnimatedLink.svelte';
	import type { Item } from '$typings/index';

	export let story: Item;
</script>

<div class="story">
	<h3 class="story__title">
		<AnimatedLink href={story.url}>
			{story.title}
		</AnimatedLink>
	</h3>
	<!-- {#if story.text}
		{@html story.text}
	{/if} -->
</div>

<style>
	.story {
		padding: 6px 5px;
		border-radius: 12px;
		background-color: var(--primarySubtleBackground);
	}

	.story__title {
		margin: 0;
		font-size: 1.2rem;
	}
</style>
