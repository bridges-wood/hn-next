<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="error-message">
	<h1>Error: {$page.status}</h1>
	<p>Failed to load user profile</p>
</div>

<style>
	.error-message {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
