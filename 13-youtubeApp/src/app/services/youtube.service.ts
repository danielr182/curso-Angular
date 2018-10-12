import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private urlYoutube = 'https://www.googleapis.com/youtube/v3';
  private apikey = 'AIzaSyCGN-WInRVBZurRPR8zIC0L3QW2_kY23Io';
  private playListId = 'UUOgSIqFFZMIWpunv7TfSzAQ';
  private nextPageToken = '';

  constructor(public http: Http) { }

  getVideos() {

    const url = `${ this.urlYoutube }/playlistItems`;
    const params = new URLSearchParams();
    params.set('part', 'snippet');
    params.set('maxResults', '10');
    params.set('playlistId', this.playListId);
    params.set('key', this.apikey);

    if (this.nextPageToken) {
      params.set('pageToken', this.nextPageToken);
    }

    return this.http.get( url, { search: params })
              .pipe( map ( res => {

                    console.log(res.json());
                    this.nextPageToken = res.json().nextPageToken;
                    const videos: any[] = [];
                    for (const video of res.json().items) {
                      const snippet = video.snippet;
                      videos.push( snippet );
                    }
                    return videos;
                  }) );
  }
}
