import { Component, OnInit } from '@angular/core';
import { IpPost } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
postList!:IpPost[];
  constructor(
    private postServie:PostService
  ) { 
    this.ShowPost()
  }

  ngOnInit(): void {
  }
  ShowPost(){
    this.postServie.getPosts().subscribe(data=>{
      this.postList=data
    })
  }
  onRemoveItem(id:number){
  const confirm = window.confirm('ban co muon xoa khong');
  if(confirm){
    this.postServie.removePost(id).subscribe(()=>{
      this.postList=this.postList.filter(item=>item.id!==id)  })
  }
  }

}
