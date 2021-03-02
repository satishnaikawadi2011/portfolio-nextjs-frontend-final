export interface CoverImage {
	_id: string;
	name: string;
	alternativeText: string;
	caption: string;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	width: number;
	height: number;
	url: string;
	provider_metadata: ProviderMetadata;
	formats: Formats;
	provider: string;
	related?: (string)[] | null;
	createdAt: string;
	updatedAt: string;
	__v: number;
	id: string;
}
interface ProviderMetadata {
	public_id: string;
	resource_type: string;
}
interface Formats {
	thumbnail: Thumbnail;
}
interface Thumbnail {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	width: number;
	height: number;
	size: number;
	path?: null;
	url: string;
	provider_metadata: ProviderMetadata;
}
