import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  
  employee:Employee=new Employee();
  isSubmitted:any;
  empData:any;
   showModal:boolean;
   updateEmp:Employee=new Employee();
  constructor(private empService:EmployeeServiceService) { }

  ngOnInit() {
    this.employeeService();
    }

  onSubmit() {
    
    this.saveEmployee();    
  } 

  
  saveEmployee(){
  let response=   this.empService.saveEmployee(this.employee);
  debugger;
  response.subscribe((data)=>this.isSubmitted=data,error=>console.log(this.isSubmitted="Employee saved"));
  }

  employeeService(){
    let response = this.empService.getAllEmployees();
    response.subscribe((data)=>this.empData=data);
  }

  openModal($event,emp:Employee){
    this.showModal=true;
    this.updateEmp=emp;
  }
  hide(){
    this.showModal=false;
  }

  updateEmployee(){
    debugger;
    let response=   this.empService.updateEmployee(this.updateEmp);
  debugger;
  response.subscribe((data)=>this.isSubmitted=data,error=>console.log(this.isSubmitted="Employee updated"));
  }
  deleteEmployee(id:number){
    let response=   this.empService.deleteEmployee(id);
  }
   
   

}
