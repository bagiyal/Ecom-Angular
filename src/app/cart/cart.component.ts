import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  productsList: any[] = [];
  cartItems: any[] = [];
  remove: any[] = [];
  constructor() {
    const storedData = localStorage.getItem('cart');
    if (storedData) {
      try {
        this.cartItems = JSON.parse(storedData);
      } catch (error) {
        console.error('Error parsing cart items:', error);
      }
    }
  }

  removeItemToCart(item: any) {
    const storedData = localStorage.getItem('cart');
    if (storedData) {
      try {
        this.productsList = JSON.parse(storedData);
        this.cartItems = this.productsList.filter(product => product.id !== item.id);
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
      } catch (error) {
        console.error('Error parsing cart items:', error);
      }
    }
  }
  
}
