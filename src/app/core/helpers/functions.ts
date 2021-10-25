import {HttpParams} from '@angular/common/http';
import {ICommonFilters} from '../http/models/base.http';

export function setFilter(pagConfig: ICommonFilters): HttpParams {
  return new HttpParams().set('page', pagConfig.page.toString())
    .set('limit', pagConfig.limit && pagConfig.limit.toString())
    .set('search', pagConfig.search && pagConfig.search.toString().trim());
}


