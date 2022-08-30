import type { Item } from '$typings/index';
import { getItem, getStories } from '$utils/api';
import type { PageLoad } from './$types';

const NUM_ITEMS = 30;

export const load: PageLoad = async ({ request }) => {
	// Fetch top story ids
	const storyIDs = await getStories('top', 3);
	console.log('items', storyIDs);
	// Fetch top stories
	const stories: Item[] = await Promise.all(
		storyIDs.slice(0, NUM_ITEMS).map(async (id: number) => await getItem(id))
	);

	return { stories };
};
