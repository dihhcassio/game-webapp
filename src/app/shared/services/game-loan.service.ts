import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GameLoanService {

  private readonly _api = `${environment.api}gameloan/`

  constructor(private _http: HttpClient) { }

  async lend(data){
    return await this._http.post<any>(`${this._api}lend`, data).toPromise();
  }

  async toReceive(data){
    return await this._http.post<any>(`${this._api}to-receive`, data).toPromise();
  }

  async get(id){
    return await this._http.get<any>(`${this._api}${id}`).toPromise();
  }

  async all(){
    return await this._http.get<any>(`${this._api}all`).toPromise();
  }
  
}
