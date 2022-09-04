import type { Item } from '$typings/index';
import { getItem, getStoryIDs } from '$utils/api';
import type { PageServerLoad } from './$types';

const NUM_ITEMS = 30;

export const load: PageServerLoad = async () => {
	// Fetch top story ids
	const itemIDs = await getStoryIDs('top', NUM_ITEMS, 0);
	// Fetch top stories
	const items: Item[] = await Promise.all(
		itemIDs.slice(0, NUM_ITEMS).map(async (id: number) => await getItem(id))
	);

	return { items };
};
