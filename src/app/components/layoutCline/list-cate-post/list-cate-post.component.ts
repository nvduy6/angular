import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-list-cate-post',
  templateUrl: './list-cate-post.component.html',
  styleUrls: ['./list-cate-post.component.css']
})
export class ListCatePostComponent implements OnInit {
  categoryDetail:any;
  cateName:any;
  
    constructor(
      private router:ActivatedRoute,
      private categoryService:CategoryService
    ) { }
  
    ngOnInit(): void {
      const id=+this.router.snapshot.paramMap.get('id')!;

      if(id){
        this.categoryService.getCate(id).subscribe(data=>{
          this.cateName=data
          this.categoryDetail=data.blogs
        })
      }
    }

}
