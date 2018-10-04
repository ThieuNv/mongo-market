import {Component, Input, OnInit} from '@angular/core';
import {Review} from '../../../../../_models/product/review.model';

@Component({
  selector: 'app-box-review',
  templateUrl: './box-review.component.html',
  styleUrls: ['./box-review.component.css']
})
export class BoxReviewComponent implements OnInit {

  @Input() review: Review;

  constructor() { }

  ngOnInit() {
  }

}
