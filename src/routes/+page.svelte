<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	import feedewsFeedReader from '$lib/stores/persistant';
	import Container from '$lib/components/Container.svelte';
	$: url = '';
	$: fullName = '';
	async function addNewFeed(url: string, fullName: string) {
		if (!url && !fullName) return;
		if ($feedewsFeedReader.feeds?.some((i) => i.url === url)) return;
		const feeds = [...$feedewsFeedReader.feeds, { fullName: fullName, url: url }];
		$feedewsFeedReader.feeds = feeds;
	}
	function deleteFeed(url: string) {
		const filtered = $feedewsFeedReader.feeds.filter((i) => i.url !== url);
		$feedewsFeedReader.feeds = filtered;
	}
	function importData() {
		$feedewsFeedReader = JSON.parse(imp);
	}
	$: backup = JSON.stringify($feedewsFeedReader);
	$: imp = '';
</script>

<Container>
	<article>
		<input type="url" name="feed" id="" placeholder="Feed URL" bind:value={url} />
		<input type="text" name="feedname" id="" placeholder="Feed Name" bind:value={fullName} />
		<button on:click={() => addNewFeed(url, fullName)}>New feed</button>
	</article>
	<form>
		<input type="text" name="backup" id="" value={backup} />
		<input type="text" name="backup" id="" bind:value={imp} placeholder="Import data" />
		<button on:click={() => importData()}>Import</button>
	</form>
	{#each $feedewsFeedReader?.feeds as source (source.url)}
		<article>
			<a href="/source?what={source.url}">
				<h3>{source.fullName}</h3>
			</a>
			<button on:click={() => deleteFeed(source.url)}>Delete</button>
		</article>
	{/each}
</Container>
