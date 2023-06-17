import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeManagementSystemComponent } from './employee-management-system/employee-management-system.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component'
@NgModule({
  declarations: [
    AppComponent,
    EmployeeManagementSystemComponent,
    NavbarComponent,
    ViewDetailComponent,
    AddDetailsComponent,
    LoginComponent,
    SignupComponent,
    AdminPanelComponent,
    AllUsersComponent,
    SidebarComponent,
    AdminNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
