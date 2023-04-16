import { Component } from '@angular/core';
import { ApiService } from '../ApiService';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  item:any;
  constructor(
    private api: ApiService,
  ) {}

  ngOnInit(){
    this.getDetail(); 
   }

  getDetail() {

    this.api.get('profile/'+localStorage.getItem('user_id')).subscribe(
      (res: any) => {

        this.item = res.result

        console.log(this.item);

      },
      (err) => {
      }
    );
  }

}
