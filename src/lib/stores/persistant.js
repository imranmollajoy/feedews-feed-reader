import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const storedData = JSON.parse(browser && localStorage.getItem('feedewsFeedReader')) || {
	feeds: [
		{
			fullName: 'প্রথম আলো',
			url: 'https://prod-qt-images.s3.amazonaws.com/production/prothomalo-bangla/feed.xml'
		}
	],
	savedArticles: []
};
const feedewsFeedReader = writable(browser && storedData);
feedewsFeedReader.subscribe(
	(val) => browser && (localStorage.feedewsFeedReader = JSON.stringify(val))
);

export default feedewsFeedReader;
