import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-box-form',
  templateUrl: './box-form.component.html',
  styleUrls: ['./box-form.component.css']
})
export class BoxFormComponent implements OnInit {

  /* Event on this Component */
  isShowForm: Boolean;

  constructor() { }

  ngOnInit() {
    this.isShowForm = false;
  }

  onOpenForm() {
    this.isShowForm = !this.isShowForm;
  }

  /* Event on this Component */
/*  isShowProductDetail: Boolean = true;

  ngOnInit() {}

  /!* Function handle event on this Component *!/
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
  }*/


}
