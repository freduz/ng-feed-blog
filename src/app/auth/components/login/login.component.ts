import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { IAppState } from 'src/app/shared/types/appState.interface';
import { ILoginRequest } from '../../types/loginRequest.interface';
import { loginAction } from '../../store/actions/login.action';
import { Observable } from 'rxjs';
import { IBackendErrorInterface } from 'src/app/shared/types/backendError.interface';
import { validationErrorsSelector } from '../../store/selectors';

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  backendErrors$!: Observable<IBackendErrorInterface | null>;
  constructor(private fb: FormBuilder, private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.generateLoginForm();
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  generateLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    const request: ILoginRequest = {
      user: this.loginForm.value,
    };
    this.store.dispatch(loginAction({ request }));
  }
}
