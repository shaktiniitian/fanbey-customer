import { Component } from '@angular/core';
import { ApiService } from 'src/app/ApiService';

@Component({
  selector: 'app-penalities',
  templateUrl: './penalities.component.html',
  styleUrls: ['./penalities.component.css'],
})
export class PenalitiesComponent {
  items: any;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.records();
  }

  records() {
    this.api
      .post('penalty-list', { school_user_id: 1})
      .subscribe((res: any) => {
        this.items = res.result.list;
      });
  }
}
