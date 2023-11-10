import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../environment/environment.employee';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URL = 'http://localhost:8080/api';

  constructor(private http: HttpClient, private router: Router) { }


  signUp(data: any) {
    return this.http.post(this.URL + '/signup', data);
  }

  loginEmployee(data:any) {
    return this.http.post(this.URL + '/login', data);
  }

  getAllEmployees() {
    return this.http.get<any>(this.URL + '/employees');
  }

  getEmployee(employeeId: any): Observable<any> {
    return this.http.get<Employee>(this.URL + '/employee/' + employeeId);
  }

  deleteEmployee(employeeId: any) {
    return this.http.delete(this.URL + '/delete/' + employeeId);    // { responseType: 'text' }
  }

  updateEmployee(employeeId: any, data: any) {
    return this.http.put(this.URL + '/update/', employeeId, data);
  }

}
