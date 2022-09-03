import type { Item } from '$typings/index';
import { getItem, getStoryIDs } from '$utils/api';
import type { PageLoad } from './$types';

const NUM_ITEMS = 30;

export const load: PageLoad = async ({ fetch }) => {
	// Fetch top story ids
	const itemIDs = await getStoryIDs('top', NUM_ITEMS, 0, fetch);
	// Fetch top stories
	const items: Item[] = await Promise.all(
		itemIDs.slice(0, NUM_ITEMS).map(async (id: number) => await getItem(id, fetch))
	);

	return { items };
};
