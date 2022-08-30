import type { Item } from '$typings/index';
import { getItem, getStoryIDs } from '$utils/api';
import type { PageLoad } from './$types';

const NUM_ITEMS = 30;

export const load: PageLoad = async ({ fetch }) => {
	// Fetch top story ids
	const storyIDs = await getStoryIDs('top', NUM_ITEMS, 0, fetch);
	console.log('items', storyIDs);
	// Fetch top stories
	const stories: Item[] = await Promise.all(
		storyIDs.slice(0, NUM_ITEMS).map(async (id: number) => await getItem(id, fetch))
	);

	return { stories };
};
