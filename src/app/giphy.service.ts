import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toArray'
import 'rxjs/add/operator/toPromise'

export interface Giphy {
  title: string;
  url: string;
  avatar?: string;
  name?: string;
}

@Injectable()
export class GiphyService {

  private readonly API_KEY = '__YOUR_KEY_HERE';

  constructor(private http: HttpClient) { }

  searchGiphy(searchText: string): Promise<Giphy[]> {
    console.log('GiphyService: ', searchText);

    const qs = new HttpParams()
      .set('api_key', this.API_KEY)
      .set('q', searchText)
      .set('limit', '15');

    return (
        this.http.get('https://api.giphy.com/v1/gifs/search',
          { params: qs})
          .take(1)
          .mergeMap((v: any) => Observable.from(v.data))
          .map((elem: any) => <Giphy> {
            title: elem.title,
            url: elem.images.fixed_height.url,
            avatar: elem.user? elem.user.avatar_url: "",
            name: elem.user? elem.user.display_name: ""
          })
          .toArray()
          .toPromise()
    );

  }

}
