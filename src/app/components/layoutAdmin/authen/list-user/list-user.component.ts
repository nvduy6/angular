import { Component, OnInit } from '@angular/core';
import { IpUser } from 'src/app/models/authen';
import { AuthenService } from 'src/app/services/authen.service';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
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
onRemoveItem(id:number){
  const confirm = window.confirm('ban co muon xoa khong');
  if(confirm){
    this.authenServie.removeUser(id).subscribe(()=>{
      this.userList=this.userList.filter(item=>item.id!==id)
    })
  }
}
}
