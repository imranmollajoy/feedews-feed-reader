import Parser from 'rss-parser';
const parser = new Parser();

(async () => {
	const feed = await parser.parseURL(
		'https://prod-qt-images.s3.amazonaws.com/production/prothomalo-bangla/feed.xml'
	);
	console.log(feed.title);
	feed.items.forEach((item) => {
		console.log(item.title + ':' + item.link);
	});
})();
