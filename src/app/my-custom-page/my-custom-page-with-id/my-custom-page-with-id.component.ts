import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-custom-page-with-id',
  templateUrl: './my-custom-page-with-id.component.html',
  styleUrls: ['./my-custom-page-with-id.component.scss'],
})
export class MyCustomPageWithIdComponent  implements OnInit {

  id: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit():void{
    this.id =this.route.snapshot.paramMap.get('id');
  }

}
