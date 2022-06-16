import { Component, OnInit } from '@angular/core';
import { IpPost } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogList!:IpPost[];
  constructor(
    private postServie:PostService
  ) { 
    this.ShowPost()
  }

  ngOnInit(): void {
  }
  ShowPost(){
    this.postServie.getPostsLimit().subscribe(data=>{
      this.blogList=data
      // console.log(data)
    })
  }

}
