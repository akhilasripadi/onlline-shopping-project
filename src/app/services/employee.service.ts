import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/class/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getParentDepartments(){
    return this.http.get('https://projectapi.gerasim.in/api/EmployeeManagement/GetParentDepartment');
  }

  getChaildDepartmentByid(deptid:number){
    return this.http.get('https://projectapi.gerasim.in/api/EmployeeManagement/GetChildDepartmentByParentId?deptId='+deptid);
  }

  saveEmployee(obj:Employee){
    return this.http.post('https://projectapi.gerasim.in/api/EmployeeManagement/CreateEmployee', obj);
  }

  
  getAllEmployees(){
    return this.http.get('https://projectapi.gerasim.in/api/EmployeeManagement/GetAllEmployees');
  }


}
