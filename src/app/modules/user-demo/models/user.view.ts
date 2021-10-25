import {IAddressHttp, ICompanyHttp, IUserHttp} from './user.http';

export class UserViewModel {
  id: string;
  name: string;
  userName: string;
  email: string;
  address?: AddressViewModel;
  phone: string;
  website: string;
  company?: CompanyViewModel;

  static mapToViewModel(http: IUserHttp): UserViewModel {
    const viewModel = new UserViewModel();
    viewModel.id = http.id;
    viewModel.name = http.name;
    viewModel.userName = http.userName;
    viewModel.email = http.email;
    viewModel.address = http.address && AddressViewModel.mapToViewModel(http.address);
    viewModel.phone = http.phone;
    viewModel.website = http.website;
    viewModel.company = http.company && CompanyViewModel.mapToViewModel(http.company);
    return viewModel;
  }
}

export class CompanyViewModel {

  name: string;
  catchPhrase: string;
  bs: string;

  static mapToViewModel(http: ICompanyHttp): CompanyViewModel {
    const viewModel = new CompanyViewModel();
    viewModel.name = http.name;
    viewModel.catchPhrase = http.catchPhrase;
    viewModel.bs = http.bs;
    return viewModel;
  }
}

export class AddressViewModel {

  street: string;
  suite: string;
  city: string;
  zipcode: string;
  lat: string;
  lng: string;

  static mapToViewModel(http: IAddressHttp): AddressViewModel {
    const viewModel = new AddressViewModel();
    viewModel.street = http.street;
    viewModel.suite = http.suite;
    viewModel.city = http.city;
    viewModel.zipcode = http.zipcode;
    if (http.geo) {
      viewModel.lat = http.geo.lat;
      viewModel.lng = http.geo.lng;
    }
    return viewModel;
  }
}
