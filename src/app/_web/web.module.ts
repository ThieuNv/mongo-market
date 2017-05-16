import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { MaterializeModule } from 'angular2-materialize';

import {CategoriesComponent} from './categories/categories.component';
import {FilteresComponent} from './categories/filteres/filteres.component';
import {ListProductComponent} from './categories/list-product/list-product.component';
import {SingleProductComponent} from './categories/list-product/single-product/single-product.component';
import {FilterPriceComponent} from './categories/filteres/filter-price/filter-price.component';
import {FilterColorComponent} from './categories/filteres/filter-color/filter-color.component';
import {FilterManufacturerComponent} from './categories/filteres/filter-manufacturer/filter-manufacturer.component';
import {ProductComponent} from './product/product.component';
import {ProductViewsComponent} from './product/product-views/product-views.component';
import {ProductDetailsComponent} from './product/product-details/product-details.component';
import {ProductDescribesComponent} from './product/product-describes/product-describes.component';
import {ProductRelativesComponent} from './product/product-relatives/product-relatives.component';
import {ProductReviewsComponent} from './product/product-details/product-reviews/product-reviews.component';
import {BoxReviewComponent} from './product/product-details/product-reviews/box-review/box-review.component';
import {BoxRelativeComponent} from './product/product-relatives/box-relative/box-relative.component';
import {CartComponent} from './cart/cart.component';

@NgModule({
  declarations: [
    CategoriesComponent,
    FilteresComponent,
    ListProductComponent,
    SingleProductComponent,
    FilterPriceComponent,
    FilterColorComponent,
    FilterManufacturerComponent,
    ProductComponent,
    ProductViewsComponent,
    ProductDetailsComponent,
    ProductDescribesComponent,
    ProductRelativesComponent,
    ProductReviewsComponent,
    BoxReviewComponent,
    BoxRelativeComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    MaterializeModule
  ]
})
export class WebModule { }
