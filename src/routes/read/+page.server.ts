import type { PageServerLoad } from './$types';
import { Readability } from '@mozilla/readability';
import { JSDOM } from 'jsdom';
export const load = (async ({ url }) => {
	const params = url.searchParams.get('url');
	const promise = JSDOM.fromURL(params).then((dom) => {
		const reader = new Readability(dom.window.document);
		const article = reader.parse();
		return { article };
	});
	const doc = await promise;
	return { doc };
}) satisfies PageServerLoad;
