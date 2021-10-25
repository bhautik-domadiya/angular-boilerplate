import {ILoginUserHttp} from './login.http';

export class LoginViewModel {
  email: string;
  fName: string;
  lastName: string;
  fullName: string;

  static mapToViewModel(http: ILoginUserHttp): LoginViewModel {
    const viewModel = new LoginViewModel();
    viewModel.email = http.email;
    viewModel.fName = http.fName;
    viewModel.lastName = http.lName;
    viewModel.fullName = viewModel.fName + viewModel.lastName;
    return viewModel;
  }
}
