import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPcate } from 'src/app/models/category';
import { IpPost } from 'src/app/models/post';
import { CategoryService } from 'src/app/services/category.service';
import { PostService } from 'src/app/services/post.service';
import axios, { Axios } from 'axios';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  cateList!:IPcate[];
post:IpPost={
  title:"",
    image:"",
    catePost:"",
    createAt:"",
    short_desc:"",
    desc:""
}
  constructor(
    private postService:PostService,
    private router:Router,
    private route:ActivatedRoute,
    private categoryServie:CategoryService
  ) { this.ShowCate()}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if(id){
      this.postService.getPost(id).subscribe(data=>{
        this.post=data
      })
    }
  }
  ShowCate(){
this.categoryServie.getCates().subscribe(data=>{
  this.cateList=data
})
  }
onSubmitPost(){
  const id = +this.route.snapshot.paramMap.get('id')!;
  if(id){
    const apiUr="https://api.cloudinary.com/v1_1/duynv/image/upload";
      const formdata = new FormData();
      formdata.append('file',this.post.image);
      formdata.append("upload_preset","okwdgnez");
      axios.post(apiUr,formdata,{
        headers:{
          "Content-Type": "application/form-data"
        },
  
      }).then((response:any)=>{
        this.post.image=response.data.url;
        this.postService.updatePost(this.post).subscribe(data=>{
          setTimeout(()=>{
            this.router.navigate(['/admin/post'])
          })
        })
      })
  }else{
    const apiUr="https://api.cloudinary.com/v1_1/duynv/image/upload";
      const formdata = new FormData();
      formdata.append('file',this.post.image);
      formdata.append("upload_preset","okwdgnez");
      axios.post(apiUr,formdata,{
        headers:{
          "Content-Type": "application/form-data"
        },
  
      }).then((response:any)=>{
        this.post.image=response.data.url;
       this.postService.addPost(this.post).subscribe(data=>{
        setTimeout(()=>{
          this.router.navigate(['/admin/post'])
        })
       })
      })
  }
  
}
changeImage(e:any){
  this.post.image=e.target.files[0];
}
}
