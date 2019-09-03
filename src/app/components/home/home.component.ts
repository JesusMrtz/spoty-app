import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  loading: boolean;
  nuevasCanciones: any[] = [];
  error = false;
  mensajeError: string = "";

  constructor(private _spotify: SpotifyService) {
    this.loading = true;
    this._spotify.getNewReleases()
    .subscribe((data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    }, (error) => {
      this.error = true;
      this.loading = false;
      this.mensajeError = error.error.error.message;
    });
  }

  ngOnInit() {
  }

}
