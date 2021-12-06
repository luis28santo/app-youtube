import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { IResponseYoutube, IItem, IVideo } from '../../interfaces/IResponse-youtube';

import Swal from 'sweetalert2';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	videos: IVideo[] = [];

	constructor(private _youtubeSrv: YoutubeService) {}

	ngOnInit(): void {
		this._youtubeSrv.getVideos().subscribe((resp: IVideo[]) => {
			this.videos.push(...resp);

			console.log(this.videos);
		});
	}

	showVideo(video: IVideo) {
		Swal.fire({
			html: `
			<h4>${video.title}</h4>
			<iframe width="100%"
			height="315"
			src="https://www.youtube.com/embed/${video.resourceId.videoId}"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer;
			autoplay;
			clipboard-write;
			encrypted-media;
			gyroscope;
			picture-in-picture"
			allowfullscreen>
			</iframe>`,
		});
	}

	/*
	<iframe width="560" height="315" src="https://www.youtube.com/embed/rwrlpvogdaM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	*/
}
