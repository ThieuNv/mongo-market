import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../../_models/product/product.model';
import {ProductService} from '../../../_services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products: Product[] = [];

  filterForm: FormGroup;
  selectOptions: any;


  constructor(private productService: ProductService) {
    this.createFilterForm();
    this.createOther();
  }

  ngOnInit() {
    this.productService.getAllProducts()
      .subscribe(
        (products: Product[]) => this.products = products,
        (error: any) => console.log(error)
      );
  }

  onSubmit() {
    console.log('Submit form');
  }

  private createOther() {
    this.selectOptions = [
      {name: 'Phone', value: 'phone'},
      {name: 'Headphone', value: 'headphone'},
      {name: 'Charging Cord', value: 'charging cord'}
    ];
  }
  private createFilterForm() {
    this.filterForm = new FormGroup({
      search: new FormControl('...', Validators.required),
      selectProducts: new FormControl(null, Validators.required),
      numberProduct: new FormControl(10, Validators.required)
    });
  }
}
