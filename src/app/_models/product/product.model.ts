import {DetailProduct} from './detail-product.model';
import {Spec} from './spec.model';
import {Image} from './image.model';
import {Review} from './review.model';

export class Product {
  constructor(public name: string,
              public categories: string[],
              public details: DetailProduct,
              public specs: Spec[],
              public imgs?: Image[],
              public tags?: string[],
              public reviews?: Review[]
  ) { }
}
