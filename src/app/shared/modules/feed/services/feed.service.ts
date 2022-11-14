import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IFeedResponse } from '../types/feed-response.interface';

@Injectable()
export class FeedService {
  url = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getFeed(url: string): Observable<IFeedResponse> {
    return this.http.get<IFeedResponse>(`${this.url}/${url}`);
  }
}
