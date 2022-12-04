import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  constructor() {}
  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map((el) => el + start);
  }
}
