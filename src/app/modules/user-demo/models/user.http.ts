export interface IUserHttp {
  id: string;
  name: string;
  userName: string;
  email: string;
  address: IAddressHttp;
  phone: string;
  website: string;
  company: ICompanyHttp;
}

export interface IAddressHttp {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeoHttp;
}

export interface IGeoHttp {
  lat: string;
  lng: string;
}

export interface ICompanyHttp {
  name: string;
  catchPhrase: string;
  bs: string;
}
