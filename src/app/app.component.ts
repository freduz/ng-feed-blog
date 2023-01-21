import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { fromEvent, Observable } from 'rxjs';
import { getCurrentUserAction } from './auth/store/actions/current-user.actions';
import { isLoadingSelector, isLoggedInSelector } from './auth/store/selectors';
import { IAppState } from './shared/types/appState.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLoading$!: Observable<boolean>;
  onlineStatus$!: Observable<Event>;
  offlineStatus$!: Observable<Event>;
  constructor(
    private store: Store<IAppState>,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.onlineStatus$ = fromEvent(window, 'online');
    this.offlineStatus$ = fromEvent(window, 'offline');
    this.store.dispatch(getCurrentUserAction());
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.onlineStatus$.subscribe((status) => {
      this.toaster.success('You are online');
    });
    this.offlineStatus$.subscribe((status) => {
      this.toaster.error("You're offline");
    });
  }
}
