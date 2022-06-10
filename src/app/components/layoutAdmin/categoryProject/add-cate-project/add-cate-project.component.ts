import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IpCateProject } from 'src/app/models/categoryProjects';
import { CategoriesProjectService } from 'src/app/services/categories-project.service';
@Component({
  selector: 'app-add-cate-project',
  templateUrl: './add-cate-project.component.html',
  styleUrls: ['./add-cate-project.component.css']
})
export class AddCateProjectComponent implements OnInit {

  catePro:IpCateProject={
    name:"",
  }
    constructor(
      private categoryService:CategoriesProjectService,
      private router:Router,
      private route:ActivatedRoute,
  
    ) { }
  
    ngOnInit(): void {
      const id = +this.route.snapshot.paramMap.get('id')!;
      if(id){
        this.categoryService.getCatePro(id).subscribe(data=>{
          this.catePro=data
        })
      }
    }
  onSubmitCatePro(){
    const id = +this.route.snapshot.paramMap.get('id')!;
    if(id){
      this.categoryService.updateCatePro(this.catePro).subscribe((data)=>{
        setTimeout(()=>{
          this.router.navigate(['admin/cate'])
        },2000)
      })
    }
    else{
      this.categoryService.addCatePro(this.catePro).subscribe(data=>{
        setTimeout(()=>{
          this.router.navigate(['/admin/cateproject'])
        })
      })
    }
    
  }

}
