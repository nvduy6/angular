import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IpProject } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project.service';
@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.css']
})
export class WorkDetailComponent implements OnInit {
projectDetail!:IpProject
  constructor(
    private projectService:ProjectService,
private router:ActivatedRoute
  ) { 
    const id = this.router.snapshot.paramMap.get('id')!;
    this.projectService.getProject(+id).subscribe(data=>{this.projectDetail=data})
  }

  ngOnInit(): void {
  }

}
