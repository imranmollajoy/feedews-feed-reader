import Parser from 'rss-parser';
const parser = new Parser();

(async () => {
	const feed = await parser.parseURL(
		'https://prod-qt-images.s3.amazonaws.com/production/prothomalo-bangla/feed.xml'
	);
	feed.items.forEach((item) => {});
})();
