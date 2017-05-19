import {Manufacturer} from './manufacturer.model';
import {Price} from './price.model';

export class DetailProduct {
  constructor(public sku: string, public star: string,
              public slogan: string, public description: string,
              public status: string, public inStock: number,
              public guarantee: string,
              public price: Price,
              public manufacturer: Manufacturer
  ) { }
}
