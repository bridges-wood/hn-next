import type { Item } from '$typings/index';
import { getItem, getUser } from '$utils/api';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const user = await getUser(params.slug);
	let submitted: Item[] = [];
	if (user.submitted) {
		submitted = await Promise.all(user.submitted.map(async (id) => await getItem(id)));
	}

	return { user, submitted };
};
