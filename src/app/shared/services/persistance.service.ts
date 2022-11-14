import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersistanceService {
  set(key: string, token: string): void {
    try {
      localStorage.setItem(key, JSON.stringify(token));
    } catch (err) {
      console.log('Error while saving to LocalStorage');
    }
  }
  get(key: string): any {
    try {
      const token = localStorage.getItem(key);
      return JSON.parse(token as string);
    } catch (err) {
      console.log('Error while getting data from LocalStorage');
      return null;
    }
  }
}
