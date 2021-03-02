import { Category } from './Category';
import { Tag } from './Tag';

export interface Project {
	title: string;
	cover: string;
	demoLink?: string;
	githubLink: string;
	category: Category;
	tags: Tag[];
	_id: string;
	published_at: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
	id: string;
}
