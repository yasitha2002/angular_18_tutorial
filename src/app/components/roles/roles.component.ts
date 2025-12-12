
import { HttpClient } from '@angular/common/http';
import { Component ,inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {IRole} from '../../model/interface/role' ;
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  //Datatypes in typescript 
  // string,number,object, Date,Boolean,array,null,undefined
  // firstName:String="Angular Tutorial" ;

  // AngularVersion = "Angular 18" ;

  // isActive:Boolean = false ;

  // currenDate : Date = new Date();

  // course_status:String = "Average" ;

  // inputType:String = "button" ;

  // selectStatus:String = ""


  //Functions in typescript
  // ShowWelcomeAlert (){
  //  alert("Welcome to Angular 18 Tutorial")
  // }
   
   roleList: IRole [] = [];
   http = inject(HttpClient);    //To call the API ,HttpClient should be injected.

   ngOnInit() : void{        //ngOnInit is a lifecycle hook in Angular that runs after the component is created
      this.getAllRoles()     //To use it, your component must implement the OnInit interface.
   }
   
   getAllRoles (){       //As we are going to fetch data from the API it is a get.
     this.http.get("/api/ClientStrive/GetAllRoles").subscribe((res:any)=>{
     this.roleList = res.data;
     })
              //.subscribe() receives the response . Those response data gets received to the parameter 'res' which is of 'any' datatype    }        
}
}

