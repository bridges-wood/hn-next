<script lang="ts">
	import type { Item } from '$typings/index';

	export let data: Item;
	if (data.type !== 'comment') throw new Error('Not a comment');
	console.log('data', data);
</script>

<div>
	{@html data.text}
</div>
