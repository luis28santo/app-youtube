import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { IResponseYoutube, IItem, IVideo } from '../../interfaces/IResponse-youtube';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	constructor(private _youtubeSrv: YoutubeService) {}

	ngOnInit(): void {
		this._youtubeSrv.getVideos().subscribe((resp: IVideo[]) => {
			console.log(resp);
		});
	}
}
