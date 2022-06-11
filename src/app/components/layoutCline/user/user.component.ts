import { Component, OnInit } from '@angular/core';
import { IpUser } from 'src/app/models/authen';
import { AuthenService } from 'src/app/services/authen.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userList!:IpUser[];
  constructor(
    private authenServie:AuthenService
  ) { 
    this.ShowUser()
  }

  ngOnInit(): void {
  }
  ShowUser(){this.authenServie.getUsers().subscribe(data=>{
    this.userList=data
  })}
}
