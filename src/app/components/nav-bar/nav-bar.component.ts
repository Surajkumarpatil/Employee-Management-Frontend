import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from 'src/app/environment/environment.employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router, private employeeService: EmployeeService){}
  
  
  ngOnInit() {

  }

  logout(){
    this.router.navigateByUrl('/login');
  }

}
