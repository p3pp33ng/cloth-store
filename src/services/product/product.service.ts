import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { productUrls } from '../../constants/web-api-urls'
import { Product } from 'src/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private urls = productUrls;

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.urls['get-products']);
  }

  //   TestClick(){
  // return this.httpClient.get("https://assignment-portal-be9561.azurewebsites.net/posts");
  //   }
}
