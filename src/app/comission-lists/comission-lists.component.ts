import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../ApiService';

@Component({
  selector: 'app-comission-lists',
  templateUrl: './comission-lists.component.html',
  styleUrls: ['./comission-lists.component.css']
})
export class ComissionListsComponent {

  loader:any = false;

  items:any;
  constructor(
    private api: ApiService,
    private rout: Router,
  ) {}


  ngOnInit(){
   this.getComissions(); 
  }
  getComissions() {
    this.loader = true;

    this.api.get('customer/members?c_id='+localStorage.getItem('user_id')).subscribe(
      (res: any) => {
        this.items = Object.values(res.records)
        this.loader = false;
      },

      (err) => {
        // this.loader = false;

      }
    );
  }

  



}
