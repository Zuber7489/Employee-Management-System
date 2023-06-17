import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeManagementSystemComponent } from './employee-management-system/employee-management-system.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'employeedetails', component:EmployeeManagementSystemComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'view/:id',component:ViewDetailComponent},
  {path:'add-details',component:AddDetailsComponent},
  {path:'signup',component:SignupComponent},
  {path:"admin",component:AdminPanelComponent},
  {path:"AllUsers",component:AllUsersComponent},
  {path:"sidebar",component:SidebarComponent},
  {path:"admin-navbar",component:AdminNavbarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
