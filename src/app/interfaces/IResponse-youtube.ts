export interface IResponseYoutube {
	kind: string;
	etag: string;
	nextPageToken: string;
	items: IItem[];
	pageInfo: IPageInfo;
}

export interface IItem {
	kind: string;
	etag: string;
	id: string;
	snippet: IVideo;
}

export interface IVideo {
	publishedAt: Date;
	channelId: string;
	title: string;
	description: string;
	thumbnails: IThumbnails;
	channelTitle: string;
	playlistId: string;
	position: number;
	resourceId: IResourceID;
	videoOwnerChannelTitle: string;
	videoOwnerChannelId: string;
}

export interface IResourceID {
	kind: string;
	videoId: string;
}

export interface IThumbnails {
	default: IDefault;
	medium: IDefault;
	high: IDefault;
	standard: IDefault;
	maxres: IDefault;
}

export interface IDefault {
	url: string;
	width: number;
	height: number;
}

export interface IPageInfo {
	totalResults: number;
	resultsPerPage: number;
}
