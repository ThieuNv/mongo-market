import {Component, Input, OnInit} from '@angular/core';
import {Review} from '../../../../_models/product/review.model';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})
export class ProductReviewsComponent implements OnInit {

  @Input() reviews: Review[];

  /* Inside component */

  // Filter
  selectFilterOptionsStar: any;
  selectFilterOptionsSort: any;


  constructor() { }

  ngOnInit() {
    this.createOther();
  }

  private createOther() {
    this.selectFilterOptionsStar = [
      {name: 'Tất cả sao', value: 'all'},
      {name: '5 sao ', value: '5'},
      {name: '4 sao ', value: '4'},
      {name: '3 sao ', value: '3'},
      {name: '2 sao ', value: '2'},
      {name: '1 sao ', value: '1'}
    ];
    this.selectFilterOptionsSort = [
      {name: 'Liên quan', value: 'all'},
      {name: 'Gần đây', value: '5'},
      {name: 'Đánh giá: Từ cao tới thấp ', value: '4'},
      {name: 'Đánh giá: từ thấp đến cao ', value: '3'},
    ];
  }
}
