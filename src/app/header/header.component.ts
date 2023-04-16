import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  userName:any

  constructor(private router: Router){}

  ngOnInit(){
   this.userName = localStorage.getItem('name')

   if(!localStorage.getItem('token')){
    this.router.navigate(['/']);

   }

  }

  logOut(){
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
