<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { doc } = data;
</script>

<Container>
	{@html doc.article.content}
</Container>
