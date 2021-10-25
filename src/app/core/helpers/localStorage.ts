import {environment} from '../../../environments/environment';

export function setAuthLocalStorage(token: string): void{
  localStorage.setItem(getAuthKey(), token);
}

export function getAuthKey(): string {
  return `${environment.appVersion}-${environment.USERDATA_KEY}`;
}

export function clearLocalStorage(): void{
  localStorage.clear();
}

export function getAuthToken(): string {
  return  localStorage.getItem(getAuthKey()) || '';
}

export function checkToken(): boolean{
  return !!localStorage.getItem(getAuthKey());
}
