import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { IPopularTag } from 'src/app/shared/types/popular-tag.interface';
import { environment } from 'src/environments/environment';
import { IPopularTagResponse } from '../types/popular-tags-response.interface';

@Injectable()
export class PopularTagService {
  private tagSelector: Subject<string> = new Subject();
  selectedTag$: Observable<string> = this.tagSelector.asObservable();
  constructor(private http: HttpClient) {}

  getPopularTag(): Observable<IPopularTag[]> {
    const url = environment.apiUrl + '/tags';
    return this.http
      .get<IPopularTagResponse>(url)
      .pipe(map((tags: IPopularTagResponse) => tags.tags));
  }

  set tagSelected$(tag: string) {
    this.tagSelector.next(tag);
  }
}
