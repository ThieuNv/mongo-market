import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  listProduct = [1, 2, 3, 4, 5, 6];


  filterForm: FormGroup;
  selectOptions: any;

  constructor() {
    this.createFilterForm();
    this.createOther();
  }

  ngOnInit() {
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
