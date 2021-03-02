import { Project } from './Project';

export interface Category {
	projects?: Project[] | null;
	_id: string;
	name: string;
	published_at: string;
	createdAt: string;
	updatedAt: string;
	__v: number;
	id: string;
}
