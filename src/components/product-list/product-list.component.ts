import { Component, OnInit } from '@angular/core';
import {Product} from '../../interfaces/product';
import { ProductService } from 'src/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products : Product[] = [];
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => this.products = data);
  }

buyProduct(){
  alert("This one should i buy");
}
}
