import { Component, OnInit, Input } from '@angular/core';
import {ProductService} from '../../../_services/product.service';
import {Product} from '../../../_models/product/product.model';

@Component({
  selector: 'app-product-describes',
  templateUrl: './product-describes.component.html',
  styleUrls: ['./product-describes.component.css']
})
export class ProductDescribesComponent implements OnInit {

  @Input() product: Product;
  socialMedia: object[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.createSocialMedia();
  }

  private createSocialMedia() {
    this.socialMedia.push({
      'href': '#',
      'title': 'Share on Facebook',
      'src': 'https://cdnskin-esyrz3xlyt4.netdna-ssl.com/skin/frontend/rwd/rdxsports/images/social-media_19.jpg',
      'alt': 'Facebook'
    });
    this.socialMedia.push({
      'href': '#',
      'title': 'Share on Twitter',
      'src': 'https://cdnskin-esyrz3xlyt4.netdna-ssl.com/skin/frontend/rwd/rdxsports/images/social-media_21.jpg',
      'alt': 'Twitter'
    });

    this.socialMedia.push({
      'href': '#',
      'title': 'Pin it',
      'src': 'https://cdnskin-esyrz3xlyt4.netdna-ssl.com/skin/frontend/rwd/rdxsports/images/social-media_23.jpg',
      'alt': 'Pin'
    });
  }
}
