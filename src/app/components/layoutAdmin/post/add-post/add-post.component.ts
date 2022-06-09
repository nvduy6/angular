import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPcate } from 'src/app/models/category';
import { IpPost } from 'src/app/models/post';
import { CategoryService } from 'src/app/services/category.service';
import { PostService } from 'src/app/services/post.service';
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
  }
  ShowCate(){
this.categoryServie.getCates().subscribe(data=>{
  this.cateList=data
})
  }
onSubmitPost(){
  this.postService.addPost(this.post).subscribe(data=>{
    setTimeout(()=>{
      this.router.navigate(['admin/post'])
    })
  })
}
}
