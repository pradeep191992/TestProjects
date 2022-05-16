import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  formSubmit() {
    if (this.form.valid) {
      this.router.navigateByUrl('/payment');
    }
    console.log("Form Valid or not",this.form.valid);
    console.log("Form Value",this.form.value);
  }

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  
  get f(){
    return this.form.controls;
  }

}
