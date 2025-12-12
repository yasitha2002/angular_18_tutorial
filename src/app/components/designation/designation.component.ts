import { Component , inject , OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import {IDesignation,APIResponseModel} from '../../model/interface/role' ;

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit{
  masterservice= inject(MasterService);

designationList:IDesignation[] = [];

  ngOnInit():void{
    this.masterservice.getDesignations().subscribe({
        next: (result: APIResponseModel) => {
            this.designationList = result.data;
        },
        error: (err) => {
            // Use console.error for better debugging in dev tools
            console.error('Error fetching designations:', err);
            alert("API error/Network down");
        }
    });
    }
  
}
