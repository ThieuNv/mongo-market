import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../_models/product/product.model';
import {ProductService} from '../../../_services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

}
