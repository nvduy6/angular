import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IpPost } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
post:IpPost={
  title:"",
    image:"",
    createAt:"",
    short_desc:"",
    desc:""
}
  constructor(
    private postService:PostService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
