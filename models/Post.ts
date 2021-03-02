import { CoverImage } from './CoverImage';
import { Tag } from './Tag';

export interface Post {
	title: string;
	description: string;
	content: string;
	slug: string;
	readingTime: string;
	cover: CoverImage;
	tags: Tag[];
	_id: string;
	published_at: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
	id: string;
}
