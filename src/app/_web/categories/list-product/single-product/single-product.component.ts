import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../../_models/product/product.model';
import {ProductService} from '../../../../_services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  @Input() product: Product;
  @Input() ind: Number;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
  }

  createRange(number) {
    const items: number[] = [];
    for ( let i = 1; i <= number; i++) {
      items.push(i);
    }
    return items;
  }
}
