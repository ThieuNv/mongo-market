import {Component, Input, OnInit} from '@angular/core';
import {Spec} from '../../../../_models/product/spec.model';

@Component({
  selector: 'app-product-specificants',
  templateUrl: './product-specificants.component.html',
  styleUrls: ['./product-specificants.component.css']
})
export class ProductSpecificantsComponent implements OnInit {

  @Input() specs: Spec[];

  constructor() { }

  ngOnInit() {
  }

}
