import type { PageLoad } from './$types';

const API_URL = 'https://hacker-news.firebaseio.com/v0';
const NUM_ITEMS = 30;

export interface Story {
	id: number;
	url: string;
	title: string;
}

export const load: PageLoad = async () => {
	// Fetch top story ids
	const res = await fetch(`${API_URL}/topstories.json`);
	const topStories = await res.json();
	// Fetch top stories
	const stories: Story[] = await Promise.all(
		topStories.slice(0, NUM_ITEMS).map(async (id: number) => {
			const res = await fetch(`${API_URL}/item/${id}.json`);
			const story = await res.json();
			return {
				id: story.id,
				url: story.url,
				title: story.title
			};
		})
	);

	return { stories };
};
