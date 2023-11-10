import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/environment/environment.employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  formGroup!: FormGroup;



  constructor(private router: Router, private employeeService: EmployeeService, private formBuilder: FormBuilder) {
  }



  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      employeeId: [''],
      firstName: [''],
      lastName: [''],
      mobileNumber: [''],
      gender: [''],
      emailId: [''],
      password: ['']

    });
  }



  register() {
    if(confirm('You want to submit your registration form?')){
    if(this.formGroup.valid){
      this.employeeService.signUp(this.formGroup.value)
      .subscribe({
        next:(res)=>{
          alert("Employee Registered Successfully...");
          this.formGroup.reset();

        },
        error:()=>{
          alert("Employee Not Registered...");
        }
      })
    }
  }
}
}












 // employeeId: string = "";
  // firstName: string = "";
  // lastName: string = "";
  // gender: string = "";
  // emailId: string = "";
  // password: string = "";


  // register() {

  //   let bodyData = {
  //     "employeeId": this.employeeId,
  //     "firstName": this.firstName,
  //     "lastName": this.lastName,
  //     "gender": this.gender,
  //     "emailId": this.emailId,
  //     "password": this.password
  //   };

  //   this.http.post("http://localhost:8080/api/signup", bodyData).subscribe((resultData: any) => {
  //     console.log(resultData);
  //     alert("Employee Registered Successfully...")
  //     this.employeeId = '';
  //     this.firstName = '';
  //     this.lastName = '';
  //     this.gender = '';
  //     this.emailId = '';
  //     this.password = ''
  //   },error=>("Employee Not Registered..."));
  // }



