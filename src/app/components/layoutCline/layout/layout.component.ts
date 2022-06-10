import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.showMenu('nav-toggle', 'navbar');
    window.addEventListener('scroll', this.isSticky);
  }
  showMenu = (toggleId: any, navId: any) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);

    if (toggle && nav) {
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show');
      });
    }
  };
  isSticky() {
    const header = document.querySelector('header');
    const scrollTop = window.scrollY;
    scrollTop >= 50
      ? header!.classList.add('shadow')
      : header!.classList.remove('shadow');
  }
}
