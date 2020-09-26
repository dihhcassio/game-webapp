import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private readonly _api = `${environment.api}game/`

  constructor(private _http: HttpClient) { }

  async all(){
    return await this._http.get<any>(`${this._api}all`).toPromise();
  }

  async get(id){
    return await this._http.get<any>(`${this._api}/${id}`).toPromise();
  }

  async save(data){
    return await this._http.post<any>(`${this._api}`, data).toPromise();
  }
  async update(data){
    return await this._http.put<any>(`${this._api}`, data).toPromise();
  }
  async delete(data){
    return await this._http.delete<any>(`${this._api}`, data).toPromise();
  }
}
