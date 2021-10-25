import {Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {IBaseErrorResponse} from '../models/base.http';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() {
  }

  displayMessage(errors: IBaseErrorResponse): void {
    errors?.errors.forEach(error => {
      // display  popup etc
      alert(error);
    });
  }

  handleError(error: HttpErrorResponse): void {
    this.displayMessage(error?.error);
  }

  successHandler(message: string): void {
    alert(message);
  }

}
