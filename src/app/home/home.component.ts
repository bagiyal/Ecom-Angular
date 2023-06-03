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
}
