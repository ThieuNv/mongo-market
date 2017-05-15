import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})
export class ProductReviewsComponent implements OnInit {

  listReview = [1, 2, 3, 4, 5, 6];

  constructor() { }

  ngOnInit() {
  }

}
