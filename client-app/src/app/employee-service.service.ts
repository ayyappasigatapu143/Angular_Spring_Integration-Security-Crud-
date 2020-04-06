import { Injectable } from '@angular/core';
import { Employee } from './employee';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  constructor(private httpClient:HttpClient) { }
  loginUser(username: string, password: string) {
      const headers =new HttpHeaders({Authorization:'Basic '+btoa(username+":"+password)});

         alert(username  );
         alert(password  );
  return this.httpClient.get("http://localhost:1234/authenticate",{headers,responseType:'text' as 'json'});
    }
  
  updateEmployee(empUpdate: Employee    ) {
   
    return  this.httpClient.post('http://localhost:1234/updateEmployee',empUpdate);
  }
 
  
  
  saveEmployee(emp: Employee) {

      console.log(emp);



    alert(sessionStorage.getItem("username"));
    const headers =new HttpHeaders({Authorization:'Basic '+btoa(sessionStorage.getItem("username")+":"+sessionStorage.getItem("password"))});
    return  this.httpClient.post('http://localhost:1234/addEmployee',emp,{headers,responseType:'text' as 'json'});
  }

  getAllEmployees() {
    const headers =new HttpHeaders({Authorization:'Basic '+btoa(sessionStorage.getItem("username")+":"+sessionStorage.getItem("password"))});
    return this.httpClient.get('http://localhost:1234/getAll',{headers});
  } 
  deleteEmployee(id: number) {
    debugger;
  return this.httpClient.delete('http://localhost:8080/deleteEmployee/{'+id+'}');
  }
}
