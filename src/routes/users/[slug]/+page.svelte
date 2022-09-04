<script lang="ts">
	import ItemList from '$lib/components/items/ItemList.svelte';
	import type { Errors, PageData } from './$types';

	export let data: PageData;
	export let errors: Errors;
	if (errors) throw new Error(errors);
	const { id, about } = data?.user;
</script>

<svelte:head>
	<title>HN Next &VerticalLine; {id}</title>
</svelte:head>

<h1>{id}</h1>
{#if about}
	{@html about}
{/if}
{#if data?.submitted}
	<div>
		<h2>Recently Submitted</h2>
		<ItemList items={data.submitted.filter((item) => item.type === 'story')} />
	</div>
{/if}
