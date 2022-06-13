import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IpConcat } from 'src/app/models/concat';
import { ConcatService } from 'src/app/services/concat.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
concat:IpConcat={
  fistname:"",
  lastname:"",
  email:"",
  message:""
}
  constructor(
    private concatService:ConcatService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.concatService.addConcat(this.concat).subscribe(data=>{
      setTimeout(()=>{
        this.router.navigate([''])
      },2000)
      
    })
  }

}
