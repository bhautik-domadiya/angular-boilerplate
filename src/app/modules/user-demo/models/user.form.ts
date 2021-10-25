import {FormControl, Validators} from '@angular/forms';
import {IUserHttp} from './user.http';

export interface IUserForm {
  name: string | FormControl;
  userName: string | FormControl;
  email: string | FormControl;
  phone: string | FormControl;
  website: string | FormControl;
}

export class UserFormModel implements IUserForm {
  name = new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]);
  userName = new FormControl(null, Validators.required);
  email = new FormControl(null, Validators.required);
  phone = new FormControl(null, Validators.required);
  website = new FormControl(null, Validators.required);
}

export class UserFormDataModel implements IUserForm {
  name: string;
  userName: string;
  email: string;
  phone: string;
  website: string;

  static mapToForm(http: IUserHttp): UserFormDataModel {
    const form = new UserFormDataModel();
    form.name = http.name;
    form.userName = http.userName;
    form.email = http.email;
    form.website = http.website;
    form.phone = http.phone;
    return form;
  }
}


