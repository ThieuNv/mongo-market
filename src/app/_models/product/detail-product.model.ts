import {Manufacturer} from './manufacturer.model';
import {Price} from './price.model';

export class DetailProduct {
  constructor(public star: number,git
              public slogan: string,
              public description: string,
              public status: string, public inStock: number,
              public guarantee: number,
              public price: Price,
              public manufacturer: Manufacturer
  ) { }
}
