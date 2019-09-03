import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {
  artist: any = {};
  topTracks: any[] = [];
  loading = true;
  constructor(private _router: ActivatedRoute,
              private _spotify : SpotifyService) {
    this._router.params.subscribe(params => {
      this.getArtist(params.id);
      this.getTopTracks(params.id);
    });
   }

  ngOnInit() {
  }

  getArtist(id: string) {
    this._spotify.getArtist(id)
    .subscribe(data => {
      this.artist = data;
      this.loading = false;
    });
  }


  getTopTracks(id: string) {
    this._spotify.getTopTracks(id)
    .subscribe(data => {
      console.log(data);
      this.topTracks = data;
    });
  }

}
