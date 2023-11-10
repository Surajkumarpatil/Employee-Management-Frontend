import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/environment/environment.employee';
import { EmployeeService } from 'src/app/service/employee.service';
import { alertifyjs } from 'alertifyjs'

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit{
  employee: any = [];
  employeeId:any; 

constructor(private readonly employeeService:EmployeeService, private readonly route: ActivatedRoute){

}

  ngOnInit(){
      this.getEmployee(this.employeeId);
}

getEmployee(employeeId: any) {
  this.employeeService.getEmployee(employeeId).subscribe(data => {
    console.log(data);
  })
}

// getEmployee(employeeId: number){
//   this.employeeService.getEmployee(employeeId).subscribe(data=>{
//   this.employee=data;
//     console.log(this.employee);
//   }) 
// }


}
