import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IpUser } from 'src/app/models/authen';
import { AuthenService } from 'src/app/services/authen.service';
import axios, { Axios } from 'axios';
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
      const apiUr="https://api.cloudinary.com/v1_1/duynv/image/upload";
      const formdata = new FormData();
      formdata.append('file',this.user.image);
      formdata.append("upload_preset","okwdgnez");
      axios.post(apiUr,formdata,{
        headers:{
          "Content-Type": "application/form-data"
        },
  
      }).then((response:any)=>{
        this.user.image=response.data.url;
        this.userService.updateUser(this.user).subscribe(data=>{
          setTimeout(()=>{
            this.router.navigate(['/admin/post'])
          })
        })
      })
    }else{
      const apiUr="https://api.cloudinary.com/v1_1/duynv/image/upload";
      const formdata = new FormData();
      formdata.append('file',this.user.image);
      formdata.append("upload_preset","okwdgnez");
      axios.post(apiUr,formdata,{
        headers:{
          "Content-Type": "application/form-data"
        },
  
      }).then((response:any)=>{
        this.user.image=response.data.url;
        this.userService.addUser(this.user).subscribe(data=>{
          setTimeout(()=>{
            this.router.navigate(['/admin/post'])
          })
        })
      })
    }
    // add 
   
  }
  changeImage(e:any){
    this.user.image=e.target.files[0];
  }
}
