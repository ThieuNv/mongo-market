import {DetailProduct} from './detail-product.model';
import {Spec} from './spec.model';
import {Image} from './image.model';
import {Review} from './review.model';

export class Product {
  constructor(public name: string,
              public sku: string,
              public category: string,
              public details: DetailProduct,
              public tags: string[],
              public createdAt?: Date,
              public updatedAt?: Date,
              public specs?: Spec[],
              public imgs?: Image[],
              public reviews?: Review[],
              public username?: string,
              public userId?: string,
              public productId?: string
  ) { }
}
