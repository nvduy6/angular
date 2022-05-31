import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IpUser } from 'src/app/models/authen';
import { AuthenService } from 'src/app/services/authen.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  @Output() onAdd = new EventEmitter()
  user: IpUser = {
    name: '',
    email: '',
    password: ''
  }
  constructor(
    private authenService: AuthenService,
    private routes: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.authenService.addUser(this.user).subscribe((data) => {
      console.log('dang y thanh cong');
      setTimeout(() => {
        this.routes.navigate([''])
      }, 2000)
    })
  }

}
