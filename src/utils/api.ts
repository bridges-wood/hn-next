import type { Item, User } from '$typings/index';

const HN_DATABASE_URL = 'https://hacker-news.firebaseio.com';
const HN_VERSION = 'v0';
const HN_URL = `${HN_DATABASE_URL}/${HN_VERSION}`;

type Fetch = (info: RequestInfo, init?: RequestInit | undefined) => Promise<Response>;

export const getItem = async (id: Item['id'], fetchFunc: Fetch = fetch): Promise<Item> => {
	const res = await fetchFunc(`${HN_URL}/item/${id}.json`);
	return res.json();
};

export const getUser = async (id: User['id'], fetchFunc: Fetch = fetch): Promise<User> => {
	const res = await fetchFunc(`${HN_URL}/user/${id}.json`);
	return res.json();
};

export const getMaxItemID = async (fetchFunc: Fetch = fetch): Promise<Item['id']> => {
	const res = await fetchFunc(`${HN_URL}/maxitem.json`);
	return res.json();
};

/**
 * Get stories of a particular type from the HN database.
 *
 * @param type The type of stories to get.
 * @param limit The number of stories to get.
 * @param offset The number of stories to skip.
 * @returns A promise that resolves to an array of stories.
 */
export const getStoryIDs = async (
	type: 'top' | 'best' | 'new' | 'ask' | 'show' | 'job' = 'top',
	limit = 10,
	offset = 0,
	fetchFunc: Fetch = fetch
): Promise<Item['id'][]> => {
	const res = await fetchFunc(`${HN_URL}/${type}stories.json`);
	const stories = await res.json();
	return stories.slice(offset, offset + limit);
};

/**
 * Helper function to get an array of populated stories.
 * @param type The type of stories to get.
 * @param limit The number of stories to get.
 * @param offset The number of stories to skip.
 * @returns A promise that resolves to an array of stories.
 */
export const getPopulatedStories = async (
	type: 'top' | 'best' | 'new' | 'ask' | 'show' | 'job' = 'top',
	limit = 10,
	offset = 0,
	fetchFunc: Fetch = fetch
): Promise<Item[]> => {
	const storyIDs = await getStoryIDs(type, limit, offset, fetchFunc);
	return Promise.all(storyIDs.map(async (id: Item['id']) => await getItem(id)));
};

export const getUpdates = async (
	fetchFunc: Fetch = fetch
): Promise<{
	items: Item['id'][];
	profiles: User['id'][];
}> => {
	const res = await fetchFunc(`${HN_URL}/updates.json`);
	return await res.json();
};
