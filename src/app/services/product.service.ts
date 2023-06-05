import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any[]>{
    return this.http.get<any[]>("https://fakestoreapi.com/products");
  }

  addToCart(obj : any): Observable<any[]>{
    return this.http.post<any[]>('https://fakestoreapi.com/carts',obj);
  }

  // fetch('https://fakestoreapi.com/carts',{
  //           method:"POST",
  //           body:JSON.stringify(
  //               {
  //                   userId:5,
  //                   date:2020-02-03,
  //                   products:[{productId:5,quantity:1},{productId:1,quantity:5}]
  //               }
  //           )
  //       })
  //           .then(res=>res.json())
  //           .then(json=>console.log(json))

}
