import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIResponseModel } from '../model/interface/role';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Client } from '../model/class/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

     getAllClients():Observable<APIResponseModel>{
      return this.http.get<APIResponseModel>(environment.API_URL+ "GetAllClients")
       }
       addUpdate(obj:Client):Observable<APIResponseModel>{
      return this.http.post<APIResponseModel>(environment.API_URL+ "AddUpdateClient",obj)
       }
       DeleteClientById(id:number):Observable<APIResponseModel>{
      return this.http.delete<APIResponseModel>(environment.API_URL+ `DeleteClientByClientId?clientId=${id}`)
       }
}
