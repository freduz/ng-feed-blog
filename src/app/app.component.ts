import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCurrentUserAction } from './auth/store/actions/current-user.actions';
import { IAppState } from './shared/types/appState.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch(getCurrentUserAction());
  }
}
