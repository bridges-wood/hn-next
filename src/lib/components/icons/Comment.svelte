<script lang="ts">
    export let size: number = 24;
</script>

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox={`0 0 32 32`}>
    <path d="M12 29.332A1.329 1.329 0 0 1 10.668 28v-4H5.332a2.666 2.666 0 0 1-2.664-2.668v-16c0-1.48 1.2-2.664 2.664-2.664h21.336a2.662 2.662 0 0 1 2.664 2.664v16A2.666 2.666 0 0 1 26.668 24h-8.133l-4.933 4.945c-.27.254-.602.387-.934.387H12m1.332-8v4.11l4.11-4.11h9.226v-16H5.332v16Zm0 0"/>
</svg>

<style>
    path {
        fill: var(--primarySolid);
    }

    svg:hover path {
        fill: var(--primarySolidHover);
    }
</style>