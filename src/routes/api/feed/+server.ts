import type { RequestHandler } from './$types';

import Parser from 'rss-parser';
const parser = new Parser();

export const GET: RequestHandler = async ({ url }) => {
	const params = url.searchParams.get('feed');
	const feed = await parser.parseURL(params);
	return new Response(JSON.stringify(feed));
};
