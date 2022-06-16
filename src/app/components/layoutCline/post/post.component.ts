import { Component, OnInit } from '@angular/core';
import { IpPost } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
postList!:IpPost[]
  constructor(
    private postService:PostService
  ) { 
    this.ShowPost()
  }

  ngOnInit(): void {
  }
ShowPost(){
  this.postService.getPosts().subscribe(data=>{
    this.postList=data
   
  })
}
}
