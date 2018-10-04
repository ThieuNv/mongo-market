import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-general',
  templateUrl: './product-general.component.html',
  styleUrls: ['./product-general.component.css']
})
export class ProductGeneralComponent implements OnInit {

  @Input() description: string;

  constructor() { }

  ngOnInit() {
  }

}
