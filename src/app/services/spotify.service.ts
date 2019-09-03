import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http: HttpClient) {
    console.log('Spotify service listo!');
   }

   getQuery(query: string) {
     const url = `https://api.spotify.com/v1/${query}`;

     const headers = new HttpHeaders({
      Authorization: 'Bearer BQC2bC37ji6zZYYY8HcHkFi_HpVHaXC2mjq3LbJy03iP4VdywB2yET_IjjUYF_3DVuKtcxPUPUjrWpsBz1w'
    });

    return this._http.get(url, {headers});
   }

   getNewReleases() {
     return this.getQuery('browse/new-releases')
     .pipe(map( (data: any) => {
       return data.albums.items;
      } ));
   }

   getArtists(artist: string) {
     return this.getQuery(`search?query=${artist}&type=artist&market=MX&offset=0&limit=15`)
     .pipe(map( (data: any) => {
       return data.artists.items;
      } ));
   }

   getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  
  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=US`)
    .pipe( map( (data: any) => {
      return data.tracks;
    }));
  }
}
