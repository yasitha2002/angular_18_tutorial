import { Component, inject, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { APIResponseModel, IMeeting } from '../../model/interface/role';

@Component({
    selector: 'app-employee',
    imports: [],
    templateUrl: './employee.component.html',
    styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
   clientsrv = inject(ClientService);
   MeetingList:IMeeting[]=[];

   ngOnInit(){
      this.getAllMeetings();
   }

   getAllMeetings(){
    this.clientsrv.getAllMeetings().subscribe((res:APIResponseModel)=>{
      this.MeetingList = res.data;
    })
  }

}
