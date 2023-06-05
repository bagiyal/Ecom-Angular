import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productsList: any[] = [];
  numbers: number = 0;

  cartObj: any = [];
  constructor(private productsService: ProductService) {
    console.log(this.productsList);
  }
  ngOnInit(): void {
    debugger;
    this.loadAllProducts();
    this.cart();
  }
  public cart(): void {
    this.numbers = this.numbers + 1;
    console.log(' numbers  componretn ', this.numbers);
  }

  loadAllProducts() {
    this.productsService.getAllProducts().subscribe((result: any) => {
      this.productsList = result;
      console.log(' home componretn ', result.data);
    });
  }

  addItemToCart(item: any) {
    // Get the existing cart items from localStorage
    let cartItems: any[] = [];
    const storedData = localStorage.getItem('cart');
    if (storedData) {
      try {
        cartItems = JSON.parse(storedData);
      } catch (error) {
        console.error('Error parsing cart items:', error);
      }
    }
    
    // Add the clicked item to the cart
    cartItems.push(item);
    
    // Store the updated cart items in localStorage
    localStorage.setItem('cart', JSON.stringify(cartItems));
    
    console.log("add item to cart", cartItems);
  }
  
  
  
}
