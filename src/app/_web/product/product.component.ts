import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../_services/product.service';
import {Product} from '../../_models/product/product.model';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-detail-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params
      .switchMap((params: Params) => this.productService.getProductById(params['id']))
      .subscribe((product: Product) => this.product = product);
  }
}
