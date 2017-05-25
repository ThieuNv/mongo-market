import {Component, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../../_models/product/product.model';
import {ProductService} from '../../../_services/product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {

  @Input() product: Product;
  @Input() ind: Number;


  /* Event on this Component */
  isShowProductDetail: Boolean = true;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {}

  /* Function handle event on this Component */
  public showProduct() {
    this.isShowProductDetail = true;
  }
  public hideProduct() {
    this.isShowProductDetail = false;
  }


  public onEdit() {
    this.router.navigateByUrl('/manager/product/create').then(_ => {
      this.productService.editProduct(this.product);
    });
  }
  public onDelete() {
    this.productService.deleteProduct(this.product)
      .subscribe(
        result => console.log(result)
      );
  }

}
