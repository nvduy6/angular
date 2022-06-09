import { Component, OnInit } from '@angular/core';
import { IPcate } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
cateList!:IPcate[];
  constructor(
    private categoryServie:CategoryService
  ) { 
    this.ShowCate()
  }

  ngOnInit(): void {
  }
ShowCate(){
  this.categoryServie.getCates().subscribe(data=>{
    this.cateList=data
  })
}
onRemoveItem(id:number){
  const confirm = window.confirm('Ban co muon xoa khong');
  if(confirm){
    this.categoryServie.removeCate(id).subscribe(()=>{
      this.cateList=this.cateList.filter(item=>item.id!==id)
    })
  }
}
}
