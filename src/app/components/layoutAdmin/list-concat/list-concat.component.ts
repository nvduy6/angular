import { Component, OnInit } from '@angular/core';
import { IpConcat } from 'src/app/models/concat';
import { ConcatService } from 'src/app/services/concat.service';
@Component({
  selector: 'app-list-concat',
  templateUrl: './list-concat.component.html',
  styleUrls: ['./list-concat.component.css']
})
export class ListConcatComponent implements OnInit {
concatList!:IpConcat[];
  constructor(
    private concatService:ConcatService
  ) { 
    this.ShowConcat()
  }

  ngOnInit(): void {
  }
ShowConcat(){
  this.concatService.listConcat().subscribe(data=>{
    this.concatList=data
  })
 
}
onRemove(id:number){
    this.concatService.removeConcat(id).subscribe(()=>{
      this.concatList=this.concatList.filter(item=>item.id!==id)
    })
}
}
