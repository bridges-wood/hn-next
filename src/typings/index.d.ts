export interface Item {
	/** The item's unique id */
	id: number;
	/** True if the item is deleted */
	deleted?: boolean;
	/** The type of the item */
	type?: 'job' | 'story' | 'comment' | 'poll' | 'pollopt';
	/** The username of the item's author */
	by?: string;
	/** Creation date of the item, in Unix Time */
	time?: number;
	/** The comment, story or poll text. HTML */
	text?: string;
	/** True if the item is dead */
	dead?: boolean;
	/** The comment's parent: either another comment or the relevant story */
	parent?: Item['id'];
	/** The pollopt's associated poll */
	poll?: Item['id'];
	/** The ids of the item's comments, in ranked display order */
	kids?: Item['id'][];
	/** The URL of the story */
	url?: string;
	/** The story's score, or the votes for a pollopt */
	score?: number;
	/** The title of the story, poll or job. HTML */
	title?: string;
	/** A list of related pollopts, in display order */
	parts?: Item['id'][];
	/** In the case of stories or polls, the total comment count */
	descendants?: number;
}

export interface User {
	/** The user's unique username. Case-sensitive. */
	id: string;
	/** Creation date of the user, in Unix Time */
	created: number;
	/** The user's karma */
	karma: number;
	/** The user's optional self-description. HTML. */
	about?: string;
	/** List of the user's stories, polls and comments */
	submitted?: Item['id'][];
}
