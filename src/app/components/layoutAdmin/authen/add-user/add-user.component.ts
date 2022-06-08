import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IpUser } from 'src/app/models/authen';
import { AuthenService } from 'src/app/services/authen.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
user:IpUser={
  name:'',
  desc:'',
  image:''
};
  constructor(
    private userService:AuthenService,
    private router:Router,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    
  }
  onSubmit(){
    this.userService.addUser(this.user).subscribe(data=>{
      setTimeout(()=>{
        this.router.navigate(['admin/user'])
      },2000)
    })
  }

}
