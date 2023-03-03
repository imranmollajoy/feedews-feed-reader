<script>
	export let details;
	const { title, link } = details;
</script>

<article>
	<a href="/read?url={link}">
		{title}
	</a>
	<button on:click>Delete</button>
</article>
