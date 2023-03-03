<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	import Container from '$lib/components/Container.svelte';

	import feedewsFeedReader from '$lib/stores/persistant';
	import ListCard from '$lib/components/ListCard.svelte';

	function unsave(link: string) {
		const filtered = $feedewsFeedReader.savedArticles.filter((i) => i.link !== link);
		$feedewsFeedReader.savedArticles = filtered;
	}
</script>

<Container>
	{#if $feedewsFeedReader.savedArticles}
		{#each $feedewsFeedReader.savedArticles as details (details.link)}
			<ListCard {details} on:click={() => unsave(details.link)} />
		{/each}
	{/if}
</Container>
