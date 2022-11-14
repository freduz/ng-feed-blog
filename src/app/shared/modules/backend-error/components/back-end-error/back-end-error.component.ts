import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IBackendErrorInterface } from 'src/app/shared/types/backendError.interface';

@Component({
  selector: 'mc-back-end-error',
  templateUrl: './back-end-error.component.html',
  styleUrls: ['./back-end-error.component.css'],
})
export class BackEndErrorComponent implements OnInit {
  @Input() errors!: IBackendErrorInterface;
  backendErrors!: string[];

  constructor() {}

  ngOnInit(): void {
    this.generateErrors();
  }

  generateErrors() {
    this.backendErrors = Object.keys(this.errors).map((key) => {
      return `${key} ${this.errors[key]}`;
    });

    console.log(this.backendErrors);
  }
}
