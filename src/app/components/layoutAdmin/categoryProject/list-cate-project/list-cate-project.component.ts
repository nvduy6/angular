import { Component, OnInit } from '@angular/core';
import { IpCateProject } from 'src/app/models/categoryProjects';
import { CategoriesProjectService } from 'src/app/services/categories-project.service';
@Component({
  selector: 'app-list-cate-project',
  templateUrl: './list-cate-project.component.html',
  styleUrls: ['./list-cate-project.component.css']
})
export class ListCateProjectComponent implements OnInit {

  cateListPro!:IpCateProject[];
  constructor(
    private categoryServie:CategoriesProjectService
  ) { 
    this.ShowCate()
  }

  ngOnInit(): void {
  }
ShowCate(){
  this.categoryServie.getCatesPro().subscribe(data=>{
    this.cateListPro=data
  })
}
onRemoveItem(id:number){
  const confirm = window.confirm('Ban co muon xoa khong');
  if(confirm){
    this.categoryServie.removeCatePro(id).subscribe(()=>{
      this.cateListPro=this.cateListPro.filter(item=>item.id!==id)
    })
  }
}

}
