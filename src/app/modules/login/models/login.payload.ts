import {UserFormDataModel} from './login.form';

export class LoginPayloadModel {

  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  color: string;

  static mapToPayload(form: UserFormDataModel): LoginPayloadModel {
    const payload = new LoginPayloadModel();
    payload.email = form.email;
    payload.firstName = form.firstName;
    payload.lastName = form.lName;
    payload.fullName = form.firstName + form.lName;
    payload.color = form.colorCode && form.colorCode;
    return payload;
  }
}
