<script lang="ts">
	export let href: string | undefined;
	export let target: string | undefined = undefined;
</script>

<a {href} {target}>
	<slot />
</a>

<style>
	a {
		color: inherit;
		text-decoration: underline #ffffff00 0.1em;
		transition: text-decoration-color 300ms;
	}
	a:hover {
		text-decoration-color: var(--orange7);
	}
</style>
