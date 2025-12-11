import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {

  //Datatypes in typescript 
  // string,number,object, Date,Boolean,array,null,undefined
  firstName:String="Angular Tutorial" ;

  AngularVersion = "Angular 18" ;

  isActive:Boolean = false ;

  currenDate : Date = new Date();

  course_status:String = "Average" ;

  inputType:String = "button" ;

  selectStatus:String = ""


  //Functions in typescript
  ShowWelcomeAlert (){
   alert("Welcome to Angular 18 Tutorial")
  }

}
