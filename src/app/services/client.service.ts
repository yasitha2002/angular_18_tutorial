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
       getAllEmployee():Observable<APIResponseModel>{
      return this.http.get<APIResponseModel>(environment.API_URL+ "GetAllEmployee")
       }
       addUpdate(obj:Client):Observable<APIResponseModel>{
      return this.http.post<APIResponseModel>(environment.API_URL+ "AddUpdateClient",obj)
       }
       DeleteClientById(id:number):Observable<APIResponseModel>{
      return this.http.delete<APIResponseModel>(environment.API_URL+ `DeleteClientByClientId?clientId=${id}`)
       }

       addClientProjectUpdate(obj:Client):Observable<APIResponseModel>{
      return this.http.post<APIResponseModel>(environment.API_URL+ "AddUpdateClientProject",obj)
       }

       getAllUser(){
        return this.http.get("https://jsonplaceholder.typicode.com/users")
       }

       getAllClientProjects():Observable<APIResponseModel>{
      return this.http.get<APIResponseModel>(environment.API_URL+ "GetAllClientProjects")
       }
      }
