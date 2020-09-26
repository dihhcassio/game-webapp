import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly _api = `${environment.api}auth`
  private readonly token_key: string = 'VOWxbppNbMrrqrOH4xeT';

  constructor(private _http: HttpClient) { }

  async authenticate(data): Promise<any>{
    return await this._http.post<any>(`${this._api}`, data).toPromise();
  }

  set token(data: string){
    sessionStorage.setItem(this.token_key, data);
  }

  get token(): string {
    return sessionStorage.getItem(this.token_key);
  }

  get existsToken(): boolean {
    return sessionStorage.getItem(this.token_key) ? true : false;
  }
}
