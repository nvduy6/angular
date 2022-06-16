import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IpCateProject } from 'src/app/models/categoryProjects';
import { IpProject } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
import { CategoriesProjectService } from 'src/app/services/categories-project.service';
import axios, { Axios } from 'axios';
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
      categoryProjectId:0,
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
  this.categoryProServie.getCatesPro().subscribe((data)=>{
    this.cateList=data
  })
    }
  onSubmitPost(){
    
    const id = +this.route.snapshot.paramMap.get('id')!;
    if(id){
      const apiUr="https://api.cloudinary.com/v1_1/duynv/image/upload";
      const formdata = new FormData();
      formdata.append('file',this.project.image);
      formdata.append("upload_preset","okwdgnez");
      axios.post(apiUr,formdata,{
        headers:{
          "Content-Type": "application/form-data"
        },
  
      }).then((response:any)=>{
        this.project.image=response.data.url;
        this.projectService.updateProject(this.project).subscribe(()=>{
          setTimeout(()=>{
            this.router.navigate(['/admin/project'])
          })
        })
      })
    }else{
      const apiUr="https://api.cloudinary.com/v1_1/duynv/image/upload";
    const formdata = new FormData();
    formdata.append('file',this.project.image);
    formdata.append("upload_preset","okwdgnez");
    axios.post(apiUr,formdata,{
      headers:{
        "Content-Type": "application/form-data"
      },

    }).then((response:any)=>{
      this.project.image=response.data.url;
      this.projectService.addProject(this.project).subscribe(()=>{
        setTimeout(()=>{
          this.router.navigate(['/admin/project'])
        })
      })
    })
    }
    

  }
  changeImage(e:any){
    this.project.image=e.target.files[0];
  }

}
