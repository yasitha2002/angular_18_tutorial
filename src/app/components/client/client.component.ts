import { Component, inject , OnInit, signal  } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import {APIResponseModel, ClientProject} from '../../model/interface/role' ;
import { CommonModule,AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { AlertComponent } from '../../reusableComponents/alert/alert.component';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule,CommonModule,AsyncPipe,AlertComponent],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{
    clientObj:Client = new Client();
    clientList:Client[]=[];
 
    clientService = inject(ClientService);

    userList$:Observable<any> = new Observable<any>;

    firstName = signal("Angular 18");
    

    onSaveClient(){
         debugger;
         this.clientService.addUpdate(this.clientObj).subscribe((res:APIResponseModel)=>{
          if(res.result){
            alert("Client Saved Successfully")
            this.loadClientData();
            this.clientObj = new Client();
          }else{
            alert(res.message)
          }
    });
  }

  ChangeFname(){
    this.firstName.set("Angular 18 Updated");
  }

  onEdit(data:Client){
       this.clientObj =  data;
  }

  onDelete(id:number){
         const isDelete =  confirm("Are you sure to delete this client?");

         if (isDelete){

          this.clientService.DeleteClientById(id).subscribe((res:APIResponseModel)=>{
          if(res.result){
            alert("Client deleted Successfully")
            this.loadClientData();
          }else{
            alert(res.message)
          }
    });
         }

  }

    ngOnInit():void{
       this.loadClientData();
       this.userList$ = this.clientService.getAllUser();
    }

    loadClientData(){
      this.clientService.getAllClients().subscribe((res:APIResponseModel)=>{
        this.clientList = res.data ;
      });
      
  }

}
  
