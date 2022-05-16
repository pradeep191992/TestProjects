import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }
  // formSubmit(templateVariableName: any) {
  //   if(templateVariableName) {
  //     this.router.navigateByUrl('/success');
  //   }

    // if (templateVariableName.form.controls.cardNumber.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
    //   return null;
    // } else {
    //     return { 'invalidCreditCard': true };
    // }
  // }
  // numberValidation() {
    
  // }

  form = new FormGroup({
    cardNumber: new FormControl('', [Validators.required, Validators.minLength(16),Validators.maxLength(16)]),
    cardexpire: new FormControl('', [Validators.required]),
    cardname: new FormControl('', [Validators.required, Validators.minLength(5)]),
    cardCode: new FormControl('', [Validators.required, Validators.maxLength(4)]),
  });

  formSubmit() {
    if (this.form.valid) {
      this.router.navigateByUrl('/success');
    }
    console.log("Form Valid or not",this.form.valid);
    console.log("Form Value",this.form.value);
  }

  
  get f(){
    return this.form.controls;
  }

}
