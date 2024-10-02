import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/class/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  public isFormVisable: boolean = false;
  public parentDepartment: any[] = [];
  public selectedDepartment: number = 0;
  public parentDeptId: number = 0;
  public chaildDeptList: any[] = [];
  public employeeObj: Employee = new Employee();
  public employeeList: any[] = [];
  public searchTerm: any = '';
  public filtredEmployee: any[] = [];

  constructor(private empservice: EmployeeService, private notificationserv:NotificationService) {}

  ngOnInit(): void {
    this.getParentDepartment();
    this.getAllemployees();
  }

  addEmployee() {
    this.isFormVisable = true;
  }

  closeForm() {
    this.isFormVisable = false;
  }

  createEmployee(employeeForm: any) {
    console.log('Employee Object:', this.employeeObj);

    this.empservice.saveEmployee(this.employeeObj).subscribe(
      (res: any) => {
        alert('Employee saved successfully!');
        employeeForm.resetForm();
        this.isFormVisable = false;
        this.getAllemployees();
      },
      (error: any) => {
        console.error('500 Error - Internal Server Error:', error);
        alert('Server encountered an issue. Please try again later.');
      }
    );
  }

  getParentDepartment() {
    this.empservice.getParentDepartments().subscribe((res: any) => {
      this.parentDepartment = res.data;
      console.log(this.parentDepartment);
    });
  }

  onParentDeptChange() {
    this.empservice
      .getChaildDepartmentByid(this.selectedDepartment)
      .subscribe((res: any) => {
        this.chaildDeptList = res.data;
        console.log(this.chaildDeptList);
      });
  }

  getAllemployees() {
    this.empservice.getAllEmployees().subscribe((res: any) => {
      this.filtredEmployee = res;
      this.employeeList = res;
      console.log(this.employeeList, 'res');
    });
  }

  edit(data: Employee) {
    this.employeeObj = data;
    this.isFormVisable = true;
    this.notificationserv.showSuccess('is edit success')
  }

  deletEmp(employeeId: number) {
    console.log(employeeId);
  }

  searchEmployees(searchTerm: any) {
    this.filtredEmployee = this.employeeList.filter((emp) => {
      return emp.employeeName
        .toLowerCase()
        .includes(this.searchTerm.toLowerCase());
    });
  }
}
