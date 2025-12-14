import { Component, inject , OnInit  } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import {APIResponseModel} from '../../model/interface/role' ;

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit{
    clientObj:Client = new Client();
    clientList:Client[]=[];
 
    clientService = inject(ClientService)

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
    }

    loadClientData(){
      this.clientService.getAllClients().subscribe((res:APIResponseModel)=>{
        this.clientList = res.data ;
      });
      
  }
}
  
