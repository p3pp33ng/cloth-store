import { Component, OnInit } from '@angular/core';
import {Product} from '../../interfaces/product';
import { ProductService } from 'src/services/product/product.service';

@Component({
  selector: 'app-show-room',
  templateUrl: './show-room.component.html',
  styleUrls: ['./show-room.component.css']
})
export class ShowRoomComponent implements OnInit {

  public products : Product[] = [];
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => this.products = data);
  }

buyProduct(){
  alert("This one should i buy");
}

}
