<script lang="ts">
	import Comment from '$lib/components/items/Comment.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	console.log('data', data.kids.length);
</script>

<svelte:head>
	<title>{data?.item.title}</title>
</svelte:head>
<h1>{data?.item.title}</h1>
<div>
	{#each data?.kids as child}
		{#if child.type === 'comment'}
			<Comment data={child} />
		{/if}
	{/each}
</div>
