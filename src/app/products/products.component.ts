import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,

  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  public products : any;
  public keyword :string = "";
  constructor() {
  }
  ngOnInit(): void {
    this.products = [
      {"id": 1, "name": "HP Laptop", "price": 4000},
      {"id": 2, "name": "Mac", "price": 15000},
      {"id": 3, "name": "Dell Laptop", "price": 7000},
      {"id": 4, "name": "Mouse", "price": 150}
    ];
  }

  deleteProduct(p: any) {
    let index = this.products.indexOf(p);
    this.products.splice(index, 1);
  }

  search() {
    this.products = this.products.filter((p: any) => p.name.includes(this.keyword));
  }
}
