<script>
	export let details;
	export let saved = false;
	const { title, link, summary } = details;
</script>

<article>
	<header>
		<a href="/read?url={link}">
			<h3>{title}</h3>
		</a>
	</header>
	{#if summary}
		<p>{summary}</p>
	{/if}
	{#if !saved}
		<button class="outline" on:click>Save</button>
	{/if}
</article>
