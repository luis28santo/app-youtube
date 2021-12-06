import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IResponseYoutube, IItem, IVideo } from '../interfaces/IResponse-youtube';

@Injectable({
	providedIn: 'root',
})
export class YoutubeService {
	private youtubeUrl: string = 'https://www.googleapis.com/youtube/v3';
	private apiKey: string = 'AIzaSyDXSgcJ1Rdgg9z37WOWhhGqRw2svEvcQmo';
	private playList: string = 'UUuaPTYj15JSkETGnEseaFFg';
	private nextPageToken: string = '';

	constructor(private _http: HttpClient) {}

	getVideos(): Observable<IVideo[]> {
		const url = `${this.youtubeUrl}/playlistItems`;
		let params = new HttpParams().set('part', 'snippet').set('maxResults', '10').set('playlistId', this.playList).set('key', this.apiKey);

		return this._http.get<IResponseYoutube>(url, { params }).pipe(
			map((resp: IResponseYoutube) => {
				this.nextPageToken = resp.nextPageToken;
				return resp.items;
			}),
			map((items: IItem[]) => {
				return items.map((video) => video.snippet);
			})
		);
	}
}
