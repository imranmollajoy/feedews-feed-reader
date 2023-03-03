<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	import feedewsFeedReader from '$lib/stores/persistant';
	import Container from '$lib/components/Container.svelte';
	const { feeds } = $feedewsFeedReader;
	const sources = [
		{
			name: 'prothomalo',
			fullName: 'Prothomalo',
			url: 'https://prod-qt-images.s3.amazonaws.com/production/prothomalo-bangla/feed.xml'
		}
	];
</script>

<Container>
	<form action="/read">
		<input type="url" name="url" id="" placeholder="Feed url" />
		<button type="submit">New feed</button>
	</form>
	{#each feeds as source (source.fullName)}
		<article>
			<a href="/source?what={source.url}">
				<h3>
					{source.fullName}
				</h3>
			</a>
		</article>
	{/each}
</Container>
