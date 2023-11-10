import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';



const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:'full'},
  {path:'login', component:LoginComponent, pathMatch:'full'},
  {path:'dashboard', component:DashboardComponent, pathMatch:'full'},
  {path:'sign-up', component:SignUpComponent, pathMatch:'full'},
  {path:'view/:employeeId', component:ViewProfileComponent, pathMatch:'full'},
  {path:'edit', component:EditProfileComponent, pathMatch:'full'}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
