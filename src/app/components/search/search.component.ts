import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  loading: boolean;
  artists: any[] = [];
  constructor(private _spotify: SpotifyService) { }

  ngOnInit() {
  }

  buscar(artist: string) {
    this.loading = true;
    this._spotify.getArtists(artist)
    .subscribe((data: any) => {
      this.artists = data;
      this.loading = false;
    });
  }

}
