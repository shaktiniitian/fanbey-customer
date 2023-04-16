import { Component } from '@angular/core';
import { ApiService } from '../ApiService';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  // registerForm: FormGroup;
  // submitted = false;

item:any;
val:any;
penality_options:any = [
  {
    id:'BOOKING_AMOUNT',
    name:' On Booking Amt'
  },

  {
    id:'EMI_PAYMENT',
    name:'On EMI Payment '
  },
  {
    id:'CANCEL_BOOKING',
    name:'On Cancel Booking '
  },
  {
    id:'OTHER_CHARGES',
    name:'Other Charges'
  }

];

  constructor(private api:ApiService,private fb: FormBuilder){

  }

  // get registerFormControl() {
  //   return this.registerForm.controls;
  // }

  ngOnInit(){
     
  
    this.getItem();

          
    // this.registerForm = this.fb.group({
    //   value: [''],
    //   penalty_condition: ['penalty_condition', [Validators.required]],
    //   penalty_head: ['', [Validators.required, Validators]],
    //   type: ['333', [Validators.required, Validators]],
    // });
   
  }

  getItem(){

    this.api.get('get-penalty/1').subscribe((res:any)=>{
      this.item = res.result;
      debugger;
this.val=this.item.value;
      // this.myForm = this.fb.group({
      //   value: ['value',this.item.value, [Validators.required]],
      //   penality_head: ['penality_head', this.item.penality_head, [Validators.required, Validators.email]],
      //   penalty_condition: ['penalty_condition', this.item.penalty_condition, [Validators.required, Validators]],
      //   type: ['type', this.item.type, [Validators.required, Validators]],
      
      // });


    })
   }

  onSubmit() {

  }

  update(data:any){
alert(data.val);
  }

}
