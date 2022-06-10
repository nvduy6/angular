import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IpCateProject } from 'src/app/models/categoryProjects';
import { IpProject } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { CategoriesProjectService } from 'src/app/services/categories-project.service';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  cateList!:IpCateProject[];
  project:IpProject={
    name:"",
      image:"",
      categoryProjectId:"",
      createAt:"",
      short_desc:"",
      desc:""
  }
    constructor(
      private projectService:ProjectService,
      private router:Router,
      private route:ActivatedRoute,
      private categoryProServie:CategoriesProjectService
    ) { this.ShowCate()}
  
    ngOnInit(): void {
      const id = +this.route.snapshot.paramMap.get('id')!;
      if(id){
        this.projectService.getProject(id).subscribe(data=>{
          this.project=data
        })
      }
    }
    ShowCate(){
  this.categoryProServie.getCatesPro().subscribe(data=>{
    this.cateList=data
  })
    }
  onSubmitPost(){
    const id = +this.route.snapshot.paramMap.get('id')!;
    if(id){
      this.projectService.updateProject(this.project).subscribe((data)=>{
      setTimeout(()=>{
        this.router.navigate(['admin/project'])
      },2000)
      })
    }else{
      this.projectService.addProject(this.project).subscribe(data=>{
        setTimeout(()=>{
          this.router.navigate(['admin/post'])
        })
      })
    }
    
  }

}
