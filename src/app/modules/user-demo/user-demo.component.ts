import {Component, OnInit} from '@angular/core';
import {UserDemoService} from './services/user-demo.service';
import {finalize, take} from 'rxjs/operators';
import {UserViewModel} from './models/user.view';
import {UserFormDataModel, UserFormModel} from './models/user.form';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import {UtilityService} from '../../core/http/services/utility.service';
import {HttpErrorResponse} from '@angular/common/http';
import {UserPayloadModel} from './models/user.payload';
import {ICommonFilters} from '../../core/http/models/base.http';
import {globalEnums} from '../../core/enums/global.enums';
import {IUserHttp} from './models/user.http';

@Component({
  selector: 'app-test',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.css']
})

export class UserDemoComponent implements OnInit {

  loadUser = true;
  userList: UserViewModel[];
  userHttp: IUserHttp[];

  isLoading: boolean;
  userEditIndex = -1;

  UserForm: FormGroup;

  pageConfig: ICommonFilters = {
    page: 0,
    limit: globalEnums.defaultPageLimit
  };

  constructor(private userDemoService: UserDemoService,
              private fb: FormBuilder,
              private utilityService: UtilityService) {
  }

  get controls(): { [p: string]: AbstractControl } {
    return this.UserForm.controls;
  }

  ngOnInit(): void {
    this.UserForm = this.fb.group(new UserFormModel());
    this.getUserList();
  }

  getUserList(): void {
    this.userDemoService.getUsersList(this.pageConfig).pipe(take(1), finalize(() => this.loadUser = false)).subscribe(users => {
        this.userHttp = users;
        this.userList = users.map(value => UserViewModel.mapToViewModel(value));
      },
      (error: HttpErrorResponse) => {
        this.utilityService.handleError(error);
      });
  }

  userFormHandler(): void {
    if (this.UserForm.valid) {
      this.isLoading = true;
      const userPayload = UserPayloadModel.mapToPayload(this.UserForm.value as UserFormDataModel);

      if (this.userEditIndex > -1) {
        this.userDemoService.updateUser(this.userList[this.userEditIndex].id, userPayload).pipe(take(1),
          finalize(() => this.isLoading = false)).subscribe(user => {

          this.userList[this.userEditIndex] = UserViewModel.mapToViewModel(user);
          this.userHttp[this.userEditIndex] = user;

          this.utilityService.successHandler('User is Updated');
          this.userEditIndex = -1;
          this.UserForm.reset();
        }, error => this.utilityService.handleError(error));
      } else {
        this.userDemoService.createUser(userPayload).pipe(take(1), finalize(() => this.isLoading = false)).subscribe(user => {

          this.userList.push(UserViewModel.mapToViewModel(user));
          this.userHttp.push(user);

          this.utilityService.successHandler('User is Created');
          this.UserForm.reset();
        }, error => this.utilityService.handleError(error));
      }
    } else {
      alert('Please Check User Form');
    }
  }

  deleteUser(userId: string, userIndex: number): void {
    this.isLoading = true;
    this.userDemoService.deleteUser(userId).pipe(take(1), finalize(() => this.isLoading = false)).subscribe(response => {
      this.userList.splice(userIndex, 1);
      this.utilityService.successHandler('User is Deleted');
    }, error => this.utilityService.handleError(error));
  }

  updateUser(userId: string, userIndex: number): void {
    this.userEditIndex = userIndex;
    const formDataModel = UserFormDataModel.mapToForm(this.userHttp[userIndex]);
    this.UserForm.patchValue(formDataModel);
  }
}
