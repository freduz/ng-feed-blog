import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BackendErrorModule } from '../shared/modules/backend-error/backend-error.module';
import { PersistanceService } from '../shared/services/persistance.service';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { GetCurrentUserEffect } from './store/effects/current-user.effect';
import { LoginEffect } from './store/effects/login.effect';
import { RegisterEffect } from './store/effects/register.effect';
import { authFeatureKey, reducers } from './store/reducers';

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    StoreModule.forFeature(authFeatureKey, reducers),
    EffectsModule.forFeature([
      RegisterEffect,
      LoginEffect,
      GetCurrentUserEffect,
    ]),
    BackendErrorModule,
  ],
  providers: [PersistanceService, AuthService],
})
export class AuthModule {}
