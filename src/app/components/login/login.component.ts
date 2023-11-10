import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/environment/environment.employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  
  formGroup!: FormGroup;

  constructor(private router: Router, private http: HttpClient, private employeeService: EmployeeService,  private formBuilder: FormBuilder){
  }
  
  

  ngOnInit(): void{
    this.formGroup = this.formBuilder.group({
      emailId: [''],
      password: [''],
  })
  }
  
   
  

  login(){
    if(this.formGroup.valid){
    this.employeeService.loginEmployee(this.formGroup.value)
    .subscribe((data: any) =>{
      console.log(data);

           if(data.message=="EmailId Not Exits"){

        alert("Employee Login Successfully...")
      }
      else if(data.message=="Login Successfully"){

        this.router.navigateByUrl('');
      }
      else{
        alert("Incorrect Username and Password");
      }
    });
  }
}

}










  // login():void{
  //   console.log(this.emailId);
  //   console.log(this.password);

  //   let bodyData={
  //     emailId:this.emailId,
  //     password:this.password
  //   };


  //   this.http.post("http://localhost:8080/api/login", bodyData).subscribe((resultData: any) => {
  //     console.log(resultData);

  //     if(resultData.message=="EmailId Not Exits"){

  //       alert("Employee Login Successfully...")
  //     }
  //     else if(resultData.message=="Login Successfully"){

  //       this.router.navigateByUrl('');
  //     }
  //     else{
  //       alert("Incorrect Username and Password");
  //     }

    // if((this.credentials.emailId!='' && this.credentials.password!='') && (this.credentials.emailId!=null && this.credentials.password!=null)){
    //     console.log("Loggin successfully.");
        
    // }else{
    //   console.log("Requrired Field");
      
    // }
  //});
//}
