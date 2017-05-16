import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-cus',
  templateUrl: './order-cus.component.html',
  styleUrls: ['./order-cus.component.css']
})
export class OrderCusComponent implements OnInit {

  selectOptions: String[] = [
    '5 newest', '10 ten ago', '20 day ago', '1 month ago', '3 month ago', '6 month ago'
  ]
  constructor() { }

  ngOnInit() {
  }

}
