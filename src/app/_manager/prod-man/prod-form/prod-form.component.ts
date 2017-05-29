import { Component, OnInit } from '@angular/core';
import {Form, FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../_services/product.service';
import {Product} from '../../../_models/product/product.model';
import {Price} from '../../../_models/product/price.model';
import {Manufacturer} from '../../../_models/product/manufacturer.model';
import {DetailProduct} from '../../../_models/product/detail-product.model';
import {Spec} from '../../../_models/product/spec.model';

@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.css']
})
export class ProdFormComponent implements OnInit {

  product: Product;

  createProductForm: FormGroup;
  isSale: Boolean = false;

  selectOptions: any;
  selectStatus: any;
  selectGuarantees: any;

  constructor(private productService: ProductService) {
    this.createForm();
    this.createOther();
  }

  ngOnInit(): void {
    this.productService.productIsEdit.subscribe(
      (product: Product) => {
        this.product = product;
        this.createForm();
      }
    );
  }

  onSale() {
    this.isSale = !this.isSale;
  }

  createOther() {
    this.selectOptions = [
      {name: 'Phone', value: 'phone'},
      {name: 'Headphone', value: 'headphone'},
      {name: 'Charging Cord', value: 'charging cord'}
    ];

    this.selectStatus = [
      {name: 'New', value: 'new'},
      {name: 'Old', value: 'old'},
      {name: 'Used', value: 'used'}
    ];

    this.selectGuarantees = [
      { name: '1 month', value: '1'},
      { name: '3 month',  value: '3' },
      { name: '6 month',  value: '6' },
      { name: '1 year',  value: '12' },
      { name: '1 year 6 month',  value: '18' },
      { name: '2 year',  value: '24' },
      { name: '2 year 6 month',  value: '30' },
      { name: '3 year',  value: '36' }
    ];

  }

  createForm() {
    let name =  null;
    let category =  '';
    let tags = null;
    let sku = '';
    let slogan = '';
    let manuName =  '';
    let serialNumber =  '';
    let location =  '';
    let actualPrice = null;
    let salePrice = null;
    let saleEndDate = null;
    let status = '';
    let inStock = null;
    let guarantee = null;
    let description = '';
    let productId = '';

    if (this.product) {
      if (this.product.details.price.sale) {
        this.isSale = true;
      }

       name = this.product.name ? this.product.name : '';
       category = this.product.category ? this.product.category : '';
       tags = this.product.tags ? this.product.tags : '';
       sku = this.product.sku ? this.product.sku : '';
       slogan = this.product.details.slogan ? this.product.details.slogan : '';
       manuName = this.product.details.manufacturer ? this.product.details.manufacturer.manuName : '';
       serialNumber = this.product.details.manufacturer ? this.product.details.manufacturer.serialNumber : '';
       location = this.product.details.manufacturer ? this.product.details.manufacturer.location : '';
        actualPrice = this.product.details.price ? this.product.details.price.actual : null;
       salePrice = this.product.details.price ? this.product.details.price.sale : null;
       saleEndDate = this.product.details.price ? this.product.details.price.saleEndDate : null;
       status = this.product.details ? this.product.details.status : '';
       inStock = this.product.details ? this.product.details.inStock : null;
       guarantee = this.product.details ? this.product.details.guarantee : null;
       description = this.product.details.description;
       productId = this.product.productId;
    }
    this.createProductForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      category: new FormControl(category, Validators.required),
      tags: new FormControl(tags, Validators.required),
      sku: new FormControl(sku, Validators.required),
      slogan: new FormControl(slogan, Validators.required),
      manuName: new FormControl(manuName, Validators.required),
      serialNumber: new FormControl(serialNumber, Validators.required),
      location: new FormControl(location, Validators.required),
      actualPrice: new FormControl(actualPrice, Validators.required),
      salePrice: new FormControl(salePrice, Validators.required),
      saleEndDate: new FormControl(saleEndDate, Validators.required),
      status: new FormControl(status, Validators.required),
      inStock: new FormControl(inStock, Validators.required),
      guarantee: new FormControl(guarantee, Validators.required),
      description: new FormControl(description, Validators.required),
      productId: new FormControl(productId),
      specKeys: new FormArray([]),
      specValues: new FormArray([])
    });
  }

  onSubmit() {
    if (this.product) {
      // Update
      this.updateOldProduct();
    } else {
      // Create
      this.createNewProduct();
    }
  }

  updateOldProduct() {
    this.productService.updateOldProduct(this.getProductFromForm())
      .subscribe(
        (result) => console.log(result)
      );
    this.createProductForm.reset();
  }
  createNewProduct() {
    this.productService.createNewProduct(this.getProductFromForm())
      .subscribe(
        dataBack => console.log(dataBack),
        error => console.error(error)
      );
    this.createProductForm.reset();
  }

  getProductFromForm(): Product {
    const data = this.createProductForm.value;
    const price = new Price(data.actualPrice, data.salePrice, data.saleEndDate);
    const manufacturer = new Manufacturer(data.manuName, data.serialNumber, data.location);
    const details = new DetailProduct(3,
      data.slogan,
      data.description,
      data.status,
      data.inStock,
      data.guarantee,
      price, manufacturer);
    const specs = [];
    const len = (<FormArray>this.createProductForm.get('specKeys')).length;
    for (let i = 0; i < len; i++) {
      const ke = (<FormArray>this.createProductForm.get('specKeys')).at(i);
      const va = (<FormArray>this.createProductForm.get('specValues')).at(i);
      specs.push(new Spec(ke.value, va.value));
    }
    return new Product(
      data.name,
      data.sku,
      data.category,
      details,
      data.tags.split(','),
      null, null, specs, null, null, null, null, data.productId);
  }

  resetForm() {
    this.createProductForm.reset();
  }

  addSpecsOfProduct() {
    const control1 = new FormControl(null, Validators.required);
    const control2 = new FormControl(null, Validators.required);
    (<FormArray>this.createProductForm.get('specKeys')).push(control1);
    (<FormArray>this.createProductForm.get('specValues')).push(control2);
  }

  removeSpec(ind) {
    (<FormArray>this.createProductForm.get('specKeys')).removeAt(ind);
    (<FormArray>this.createProductForm.get('specValues')).removeAt(ind);
  }
}
