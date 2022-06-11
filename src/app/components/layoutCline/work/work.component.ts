import { Component, OnInit } from '@angular/core';
import { IpProject } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  projectList!:IpProject[];
  constructor(
    private postServie:ProjectService
  ) { 
    this.ShowPost()
  }

  ngOnInit(): void {
  }
  ShowPost(){
    this.postServie.getProjects().subscribe(data=>{
      this.projectList=data
    })
  }
  onRemoveItem(id:number){
  const confirm = window.confirm('ban co muon xoa khong');
  if(confirm){
    this.postServie.removeProject(id).subscribe(()=>{
      this.projectList=this.projectList.filter(item=>item.id!==id)  })
  }
  }

}
