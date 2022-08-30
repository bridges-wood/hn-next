<script lang="ts">
	export let href: string | undefined;
</script>

<a {href}>
	<slot />
</a>

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
		background-color: var(--orange7);
		transform-origin: bottom left;
	}
</style>
