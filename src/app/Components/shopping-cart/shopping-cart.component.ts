import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  purchaseDate: number = 0;
  totalPrice: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
