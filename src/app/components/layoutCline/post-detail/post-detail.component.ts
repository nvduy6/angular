import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IpPost } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
postDetail!:IpPost
  constructor(
    private postService:PostService,
    private router:ActivatedRoute
  ) {
    const id =this.router.snapshot.paramMap.get('id')!;
    this.postService.getPost(+id).subscribe(data=>{this.postDetail=data})
   }

  ngOnInit(): void {
  }

}
