import { Injectable } from '@angular/core';
import { Product } from '../Models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

private items: Product[] =[];

  constructor() { }

  public addToCart(product: Product){
     this.items.push(product);
  };

  public getItems(): Product[]{
    return this.items;
  };

  public clearCart(): Product[]{
    this.items=[];
    return this.items;
  };

}
