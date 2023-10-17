import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  constructor(private http: HttpClient) {

    this.items = JSON.parse(localStorage.getItem("Items")!);
   }
  


  addToCart(product: Product){
    this.items.push(product)

    localStorage.setItem("Items",JSON.stringify(this.items))
  }
  
  getItems() {
    return this.items
  }

  clearCart() {
    this.items =[];
    return this.items;
  }

  getshippingPrices(){
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json')
  }
}
