import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../ApiService';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form: FormGroup;
  message = false;
  submitted = false;

  constructor(
    private api: ApiService,
    private rout: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      password: ['', [Validators.required]],
      mobile_no: ['', [Validators.required]],
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.message = false;
    this.api.post('customer-login', this.form.value).subscribe(
      (res: any) => {
        if(res.code==200){
        console.log(res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('name', res.name);
        localStorage.setItem('user_id', res.id);
          this.rout.navigate(['dashboard']);
      }else{
        this.message = true;
      }

      },
      (err) => {
        console.log(err);
        this.message = true;
        setTimeout(() => (this.message = false), 3000);
      }
    );
  }
}
