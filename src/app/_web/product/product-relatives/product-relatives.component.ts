import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-relatives',
  templateUrl: './product-relatives.component.html',
  styleUrls: ['./product-relatives.component.css']
})
export class ProductRelativesComponent implements OnInit {

  listBoxRelative = [1, 2, 3, 4];

  constructor() { }

  ngOnInit() {
  }

}
