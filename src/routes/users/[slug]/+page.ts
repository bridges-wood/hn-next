import type { Item } from '$typings/index';
import { getItem, getUser } from '$utils/api';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const user = await getUser(params.slug, fetch);
	let submitted: Item[] = [];
	if (user.submitted) {
		submitted = await Promise.all(user.submitted.map(async (id) => await getItem(id)));
	}

	return { user, submitted };
};
