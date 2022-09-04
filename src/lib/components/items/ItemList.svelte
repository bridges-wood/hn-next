<script lang="ts">
	import type { Item } from '$typings/index';
	import Comment from './Comment.svelte';
	import Story from './Story.svelte';

	export let items: Item[];
</script>

<div class="item-list">
	{#each items as item}
		{#if item.type === 'story'}
			<Story data={item} />
		{:else if item.type === 'comment'}
			<Comment data={item} />
		{/if}
	{/each}
</div>

<style>
	.item-list {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}

	:global(.item-list > *) {
		width: 100%;
	}
</style>
