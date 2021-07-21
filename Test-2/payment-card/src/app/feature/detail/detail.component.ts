import { Component, OnInit } from '@angular/core';
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

  formSubmit(templateVariableName: any) {
    console.log(templateVariableName)
    if (templateVariableName) {
      this.router.navigateByUrl('/payment');
    }
  }

}
