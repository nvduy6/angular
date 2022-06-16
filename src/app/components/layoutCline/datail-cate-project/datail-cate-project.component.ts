import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesProjectService } from 'src/app/services/categories-project.service';

@Component({
  selector: 'app-datail-cate-project',
  templateUrl: './datail-cate-project.component.html',
  styleUrls: ['./datail-cate-project.component.css']
})
export class DatailCateProjectComponent implements OnInit {
  categoryProject:any;

  constructor(
    private router:ActivatedRoute,
    private categoryProjectService:CategoriesProjectService
  ) { }

  ngOnInit(): void {
    const id=+this.router.snapshot.paramMap.get('id')!;
    if(id){
      this.categoryProjectService.getCatePro(id).subscribe(data=>{
        this.categoryProject=data.projects;
      })
    }
  }
}
