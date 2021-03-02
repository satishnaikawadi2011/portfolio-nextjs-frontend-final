import { Project } from './Project';
import { Post } from './Post';

export interface Tag {
	posts?: Post[] | null;
	projects?: Project[] | null;
	_id: string;
	name: string;
	published_at: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
	id: string;
}
