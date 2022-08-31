import type { Item } from '$typings/index';

/**
 * Calculates the amount of time that has passed since a given date.
 * @param time The time to convert.
 * @returns A number representing the amount of time that has passed since the given date.
 * @throws {Error} If the given time is undefined.
 */
export const calculateTimeDifference = (time: Item['time']): number => {
	if (!time) throw new Error('No time provided.');

	const timeDifference = Date.now() - time * 1000;
	if (timeDifference < 0) throw new Error('Time difference is negative.');

	return timeDifference;
};

/**
 * Converts a time difference to a human-readable string.
 * @param time The time difference to convert.
 */
export const formatTimeDifference = (time: number): string => {
	const seconds = Math.floor(time / 1000);
	const minutes = Math.floor(seconds / 60);
	const hours = Math.floor(minutes / 60);
	const days = Math.floor(hours / 24);
	const months = Math.floor(days / 30);
	const years = Math.floor(months / 12);

	if (years > 0) return `${years} year${years === 1 ? '' : 's'} ago`;
	if (months > 0) return `${months} month${months === 1 ? '' : 's'} ago`;
	if (days > 0) return `${days} day${days === 1 ? '' : 's'} ago`;
	if (hours > 0) return `${hours} hour${hours === 1 ? '' : 's'} ago`;
	if (minutes > 0) return `${minutes} minute${minutes === 1 ? '' : 's'} ago`;
	if (seconds > 0) return `${seconds} second${seconds === 1 ? '' : 's'} ago`;

	return 'just now';
};
