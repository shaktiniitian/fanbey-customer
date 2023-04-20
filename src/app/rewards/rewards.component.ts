import { Component } from '@angular/core';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent {

  loader:any = false;

  constructor(){}

  ngOnInit(){

    this.getItems();
  }


  getItems(){
    this.loader = true;

    setTimeout(() => {
      this.loader = false;
    }, 1000);


  }

}
