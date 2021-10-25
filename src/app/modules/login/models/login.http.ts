export interface ICompanyDetails{
  companyName?: string;
  add: string;
}

export interface ILoginUserHttp {
  email: string;
  fName: string;
  lName: string;
  companyDetails?: ICompanyDetails;
}
