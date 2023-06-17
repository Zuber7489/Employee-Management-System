import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
data:any;
  constructor(public auth:AuthService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  time=new Date();

  getAllUsers(){
    this.auth.getForm().subscribe(res=>{
this.data=res;
    })
  }
  
}

