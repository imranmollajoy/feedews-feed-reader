<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<Container>
	<nav>
		<a href="/"> <h1>Home</h1> </a>
		<a href="/saved">Saved</a>
	</nav>
</Container>
<slot />
