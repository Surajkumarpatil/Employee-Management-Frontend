import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/environment/environment.employee';
import { EmployeeService } from 'src/app/service/employee.service';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { alertifyjs } from 'alertifyjs'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;


  constructor(private router: Router, private employeeService: EmployeeService) {
  }

  employee: any = [];
  displayedColumns: string[] = ['employeeId', 'firstName', 'lastName', 'emailId', "mobileNumber", 'gender', 'action'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.getAllEmployes();
  }

  getAllEmployes() {
    this.employeeService.getAllEmployees().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
      },
      error: (res) => {
        alert("Error while fetching the employees")
      }
    })
  }

  deleteEmployee(employeeId: any) {
    if(confirm('You want to delete this employee?')){
      this.employeeService.deleteEmployee(employeeId).subscribe(data => { 
        
    });
    
    }
    this.getAllEmployes();
    
}

  getEmployee(employeeId: any): void {
    this.employeeService.getEmployee(employeeId).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/view/:employeeId')
    })
  }
}




// this.employeeService.deleteEmployee(employeeId).subscribe(data=>{
      //   console.log('deleted',data);
      //   this.router.navigateByUrl('/dashboard');
      // }
      // )
      // }

       // getAllEmployes(){
  //   this.employeeService.getAllEmployees().subscribe((resultData) => {
  //     this.employee = resultData;
  //     this.dataSource = new MatTableDataSource<any>(this.employee);
  //     this.deleteEmployee(this.employee);
  //   })
  // }