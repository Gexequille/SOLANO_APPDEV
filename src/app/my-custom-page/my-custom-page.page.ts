import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router'

@Component({
  selector: 'app-my-custom-page',
  templateUrl: './my-custom-page.page.html',
  styleUrls: ['./my-custom-page.page.scss'],
})
export class MyCustomPagePage {

  constructor(private router: Router) {}

  go(){
    this.router.navigate(['my-custom-page',1]);
  }

}
