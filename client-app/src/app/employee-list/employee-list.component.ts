import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Employee } from '../employee';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
   emp:Employee[];
   selectedEmp:number;
   changeInText:string;

   constructor(private builder:FormBuilder){

   }

   myForm =this.builder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
   });
   
   ngOnInit() {
      
   this.selectedEmp=3;
    this.emp=[
     {id:1,firstname:'hari',lastname:'raj',email:'hari@gmail.com',password:'dvsdvsdv'},
     {id:2,firstname:'giri',lastname:'ranga',email:'giri@gmail.com',password:'dvzxzvsdvsdv'},
     {id:3,firstname:'lahari',lastname:'krishna',email:'lahari@gmail.com',password:'ege234523'},
     {id:4,firstname:'siri',lastname:'manasa',email:'siri@gmail.com',password:'svvsdq33332'}
    ] ; 



  }

  changeEmployee(val:Employee){
    alert(val.firstname +" " +val.lastname);  
     this.changeInText=val.firstname+""+val.lastname;
  }

}
