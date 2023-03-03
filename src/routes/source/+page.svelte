<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	import feedewsFeedReader from '$lib/stores/persistant';
	import FeedCard from '$lib/components/FeedCard.svelte';

	const { feed } = data;
	const { items, title } = feed;
	const dummyFeed = {
		items: [
			{
				title:
					'Possimus, saepe nihil, nulla aspernatur ipsum corrupti dignissimos maxime nobis illo ut',
				link: 'ji'
			},
			{
				title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
				link: 'ko'
			},
			{
				title: 'laborum repellat provident deleniti? A atque ea voluptate ratione ab.',
				link: 'oko'
			}
		]
	};
	function save(link: string, title: string) {
		const articles = $feedewsFeedReader.savedArticles;
		$feedewsFeedReader.savedArticles = [...articles, { link: link, title: title }];
	}
</script>

<Container>
	<h2>{title}</h2>
	{#each items as details (details.link)}
		<FeedCard
			{details}
			saved={$feedewsFeedReader.savedArticles?.some((i) => i.link === details.link)}
			on:click={() => save(details.link, details.title)}
		/>
	{/each}
</Container>
