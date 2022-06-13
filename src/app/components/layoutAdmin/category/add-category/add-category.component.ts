import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPcate } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
cate:IPcate={
  name:"",
}
  constructor(
    private categoryService:CategoryService,
    private router:Router,
    private route:ActivatedRoute,

  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if(id){
      this.categoryService.getCate(id).subscribe(data=>{
        this.cate=data
      })
    }
  }
onSubmitCate(){
  const id = +this.route.snapshot.paramMap.get('id')!;
  if(id){
    this.categoryService.updateCate(this.cate).subscribe((data)=>{
      setTimeout(()=>{
        this.router.navigate(['admin/cate'])
      },2000)
    })
  }
  else{
    this.categoryService.addCate(this.cate).subscribe(data=>{
      setTimeout(()=>{
        this.router.navigate(['admin/cate'])
      },2000)
    })
  }
  
}
}
