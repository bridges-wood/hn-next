import type { Item, User } from '$typings/index';

const HN_DATABASE_URL = 'https://hacker-news.firebaseio.com';
const HN_VERSION = 'v0';
const HN_URL = `${HN_DATABASE_URL}/${HN_VERSION}`;

export const getItem = async (id: Item['id']): Promise<Item> => {
	const res = await fetch(`${HN_URL}/item/${id}.json`);
	return await res.json();
};

export const getUser = async (id: User['id']): Promise<User> => {
	const res = await fetch(`${HN_URL}/user/${id}.json`);
	return await res.json();
};

export const getMaxItemID = async (): Promise<Item['id']> => {
	const res = await fetch(`${HN_URL}/maxitem.json`);
	return await res.json();
};

/**
 * Get stories of a particular type from the HN database.
 *
 * @param type The type of stories to get.
 * @param limit The number of stories to get.
 * @param offset The number of stories to skip.
 * @returns A promise that resolves to an array of stories.
 */
export const getStories = async (
	type: 'top' | 'best' | 'new' | 'ask' | 'show' | 'job' = 'top',
	limit = 10,
	offset = 0
): Promise<Item['id'][]> => {
	const res = await fetch(`${HN_URL}/${type}stories.json`);
	const stories = await res.json();
	return stories.slice(offset, offset + limit);
};

export const getUpdates = async (): Promise<{
	items: Item['id'][];
	profiles: User['id'][];
}> => {
	const res = await fetch(`${HN_URL}/updates.json`);
	return await res.json();
};
