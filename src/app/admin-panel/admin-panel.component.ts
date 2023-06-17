import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
data:any;
  constructor(public crud:CrudService) { }

  ngOnInit(): void {
    this.getAllData()
  }
time=new Date();
getAllData(){
  this.crud.getdata().subscribe(res=>{
this.data=res;
console.log(this.data)
  })
}
}
