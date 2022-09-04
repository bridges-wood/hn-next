import { getItem } from '$utils/api';
import type { PageServerLoad } from './$types';

const NUM_ITEMS = 30;

export const load: PageServerLoad = async ({ params }) => {
	const item = await getItem(Number(params.slug));

	const kids = item.kids
		? await Promise.all(item.kids.slice(0, NUM_ITEMS).map(async (id: number) => await getItem(id)))
		: [];

	return { kids, item };
};
