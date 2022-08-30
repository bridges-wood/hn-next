<script lang="ts">
	import type { Item } from '$typings/index';

	export let story: Item;
</script>

<div>
	<h3>
		<a href={story.url}>
			{story.title}
		</a>
	</h3>
	{#if story.text}
		{@html story.text}
	{/if}
</div>

<style>
	a {
		color: inherit;
		text-decoration: none;
		position: relative;
	}
	a::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: transparent;
		transform: scaleX(0);
		transition: transform 0.3s ease-in-out;
	}
	a:hover::before {
		transform: scaleX(1);
		border-radius: 2px;
		background-color: inherit;
		transform-origin: bottom left;
	}

	data h3 {
		margin: 0;
	}
</style>
