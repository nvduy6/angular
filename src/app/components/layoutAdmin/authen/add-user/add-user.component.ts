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

  ngOnInit(

  ): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if(id){
      this.userService.getUser(id).subscribe(data=>{
        this.user=data
      })
    }
  }
  onSubmit(){
    const id = +this.route.snapshot.paramMap.get('id')!;
    // update
    if(id){
      this.userService.updateUser(this.user).subscribe((data)=>{
        setTimeout(()=>{
          this.router.navigate(['/admin/user'])
        },2000)
      })
    }else{
      this.userService.addUser(this.user).subscribe(data=>{
        setTimeout(()=>{
          this.router.navigate(['admin/user'])
        },2000)
      })
    }
    // add 
   
  }

}
