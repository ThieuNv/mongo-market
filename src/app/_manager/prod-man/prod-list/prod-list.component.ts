import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../_services/product.service';
import {Product} from '../../../_models/product/product.model';

@Component({
  selector: 'app-prod-list',
  templateUrl: './prod-list.component.html',
  styleUrls: ['./prod-list.component.css']
})
export class ProdListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAllProducts()
      .subscribe(
        (products: Product[]) => this.products = products,
        (error: any) => console.log(error)
      );
  }
}
