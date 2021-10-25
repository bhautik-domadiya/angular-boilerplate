import {UserFormDataModel} from './user.form';

export class UserPayloadModel {
  name: string;
  userName: string;
  email: string;
  phone: string;
  website: string;
  staticIp?: string;

  static mapToPayload(formData: UserFormDataModel): UserPayloadModel {
    const payload = new UserPayloadModel();
    payload.name = formData.name;
    payload.email = formData.email;
    payload.userName = formData.userName;
    payload.phone = formData.phone;
    payload.website = formData.website;
    return payload;
  }
}
