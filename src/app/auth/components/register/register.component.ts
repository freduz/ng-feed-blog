import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from 'src/app/shared/types/appState.interface';
import { IBackendErrorInterface } from 'src/app/shared/types/backendError.interface';

import { registerAction } from '../../store/actions/register.action';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';
import { IRegisterRequest } from '../../types/registerRequest.interface';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  isSubmitting$!: Observable<boolean>;
  validationErrors$!: Observable<IBackendErrorInterface | null>;
  constructor(private fb: FormBuilder, private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.createRegisterForm();
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.validationErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  registerUser() {
    const request: IRegisterRequest = {
      user: this.registerForm.value,
    };
    this.store.dispatch(registerAction({ request }));
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
}
