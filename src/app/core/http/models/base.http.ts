export interface IBaseResponse<T> {
  success: boolean;
  data: T;
}

export interface IPaginationAPIResponse<T> {
  items: Array<T>;
  currentItemCount: number;
  currentPage: string;
  itemPerPage: number;
  lastPage: boolean;
  totalItems: number;
  totalPage: number;
}

export interface ICommonFilters {
  page: number;
  limit: number;
  search?: string;
}

export interface  IBaseErrorResponse{
  statusCode: number;
  success: boolean;
  errors: Array<IError>;
}

export interface IError {
  error: string;
  description: string;
  displayMessage: string;
}
