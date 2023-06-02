import { Component,OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productsList: any[] = [];
  numbers: number[] = Array.from({ length: 10 }, (_, i) => i + 1);
  constructor(private productsService: ProductService) {
    console.log(this.productsList);
  }
  ngOnInit(): void {
    debugger;
    this.loadAllProducts()
  }
  loadAllProducts() {
    this.productsService.getAllProducts().subscribe((result: any) => {
      this.productsList = result;
      console.log(" home componretn ",result.data);
    });
  }
}
