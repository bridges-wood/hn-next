import { getItem } from '$utils/api';
import type { PageLoad } from './$types';

const NUM_ITEMS = 30;

export const load: PageLoad = async ({ fetch, params }) => {
	const item = await getItem(Number(params.slug), fetch);

	const kids = item.kids
		? await Promise.all(
				item.kids.slice(0, NUM_ITEMS).map(async (id: number) => await getItem(id, fetch))
		  )
		: [];

	return { kids, item };
};
