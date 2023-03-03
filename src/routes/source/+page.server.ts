import type { PageServerLoad } from './$types';

export const load = (async ({ url }) => {
	const params = url.searchParams.get('what');
	const feed = await fetch(`${url.origin}/api/feed?feed=${params}`).then((e) => e.json());
	return { feed };
}) satisfies PageServerLoad;
