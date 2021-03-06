import { Component, OnInit } from '@angular/core';
import { IpUser } from 'src/app/models/authen';
import { AuthenService } from 'src/app/services/authen.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
