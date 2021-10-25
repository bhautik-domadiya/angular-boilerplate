import {FormControl, Validators} from '@angular/forms';
import {ILoginUserHttp} from './login.http';

// decide key types
export interface IUserForm {
  email: string | FormControl;
  firstName: string | FormControl;
  lName: string | FormControl;
  colorCode: string | FormControl;
  company?: string | FormControl;
}

// Create Form
export class UserFormModel implements IUserForm {
  email = new FormControl(null, [Validators.required, Validators.email]);
  firstName = new FormControl(null, Validators.required);
  lName = new FormControl(null, Validators.required);
  colorCode = new FormControl(null, Validators.required);
  company = new FormControl(null, Validators.required);
}

export class UserFormDataModel implements IUserForm {
  email: string;
  firstName: string;
  lName: string;
  colorCode: string;
  company: string;

  static mapToForm(http: ILoginUserHttp): UserFormDataModel {
    const form = new UserFormDataModel();
    form.email = http.email;
    form.firstName = http.fName;
    form.lName = http.lName;
    form.company = http.companyDetails && (http.companyDetails?.companyName && http.companyDetails.companyName);
    return form;
  }
}
