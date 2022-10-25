<script lang="ts">
	export let href: string | undefined;
	export let target: string | undefined = undefined;
	export let rel: string | undefined = undefined;
	let clazz: string | undefined = undefined;
	export {clazz as class};
</script>

<a {href} {target} {rel} class={clazz}>
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
