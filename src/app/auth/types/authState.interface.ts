import { IBackendErrorInterface } from 'src/app/shared/types/backendError.interface';
import { ICurrentUser } from 'src/app/shared/types/currentUser.interface';

export interface IAuthState {
  isSubmitting: boolean;
  currentUser: ICurrentUser | null;
  isLoggedIn: boolean | null;
  validationErrors: IBackendErrorInterface | null;
  isLoading: boolean;
}
