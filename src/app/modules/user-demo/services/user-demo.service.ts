import {Injectable} from '@angular/core';
import {BaseHttpService} from '../../../core/http/services/base-http.service';
import {IUserHttp} from '../models/user.http';
import {Observable} from 'rxjs';
import {UserPayloadModel} from '../models/user.payload';
import {setFilter} from '../../../core/helpers/functions';
import {ICommonFilters} from '../../../core/http/models/base.http';

@Injectable()
export class UserDemoService {

  constructor(private http: BaseHttpService) {
  }

  private usersEndpoint = 'users';

  getUsersList(filters?: ICommonFilters): Observable<IUserHttp[]> {
    return this.http.get<IUserHttp[]>(this.usersEndpoint, setFilter(filters));
  }

  createUser(user: UserPayloadModel): Observable<IUserHttp> {
    return this.http.post<IUserHttp>(this.usersEndpoint, user);
  }

  deleteUser(userId: string): Observable<any> {
    return this.http.delete<any>(`${this.usersEndpoint}/${userId}`);
  }

  updateUser(userId: string, user: UserPayloadModel): Observable<any> {
    return this.http.put<any>(`${this.usersEndpoint}/${userId}`, user);
  }

}
