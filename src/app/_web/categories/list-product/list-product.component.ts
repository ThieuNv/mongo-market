import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  listProduct = [1, 2, 3, 4, 5, 6];

  constructor() { }

  ngOnInit() {
  }

}
