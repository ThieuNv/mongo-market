import {EventEmitter, Injectable} from '@angular/core';
import {Http, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';   // include all operator like: map, catch,...

import {AppConfig} from '../app.config';
import {Product} from '../_models/product/product.model';
import {DetailProduct} from '../_models/product/detail-product.model';

@Injectable()
export class ProductService {

  products: Product[] = [];
  productIsEdit = new EventEmitter<Product>();

  constructor(private http: Http) {}

  createNewProduct(product: Product) {
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    const body = JSON.stringify(product);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post(AppConfig.dns_product_local + '/create' + token, body, {headers: headers})
      .map((response: Response) => {
        const resultProduct = response.json().obj;
        const prod = this.getProduct(resultProduct);
        this.products.push(prod);
        console.log(prod);
        return prod;
      })
      .catch((error: Response) => Observable.throw(error));
  }

  updateOldProduct(product: Product) {
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    const body = JSON.stringify(product);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.patch(AppConfig.dns_product_local + '/update/' + product.productId + token, body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error));
  }

  deleteProduct(product: Product) {
    this.products.splice(this.products.indexOf(product), 1);
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    return this.http.delete(AppConfig.dns_product_local + '/delete/' + product.productId + token)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error));
  }

  getAllProducts() {
    const token = localStorage.getItem('token') ? '?token=' + localStorage.getItem('token') : '';
    return this.http.get(AppConfig.dns_product_local + '/all' + token)
      .map((response: Response) => {
        const productsBack = response.json().obj;
        const transformedProducts: Product[] = [];
        for (const product of productsBack) {
          transformedProducts.push(this.getProduct(product));
        }
        this.products = transformedProducts;
        console.log(transformedProducts);
        return transformedProducts;
      })
      .catch((error: Response) => Observable.throw(error));
  }



  /* Function helper */
  getProduct(product): Product {
    const detailProduct = product.details;
    const createdAt = new Date(product.createdAt);
    const updatedAt = new Date(product.updatedAt);
    const tags = product.tags.join();
    return new Product(
      product.name,
      product.sku,
      product.category,
      detailProduct, tags, createdAt, updatedAt,
      product.specs,
      product.imgs,
      product.reviews,
      product.user.manager.username,
      product.user._id,
      product._id
    );
  }

  editProduct(product: Product) {
    this.productIsEdit.emit(product);
  }
}
