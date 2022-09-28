import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from 'src/app/viewModel/discount-offers';
import { Iproduct } from 'src/app/viewModel/iproduct';
import { StoreData } from 'src/app/viewModel/store-data';
import { Icategory } from 'src/app/viewModel/icategory';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  // Properties:
  storeDataa: StoreData;
  discount: DiscountOffers = DiscountOffers['15%'];
  discountValue = DiscountOffers[this.discount];
  clientName: string = '';
  prodList: Iproduct[];
  catList: Icategory[];
  selectedCatID: number = 10;
  purshaseFlag: boolean = false;


  constructor() {

    this.prodList = [
      { id: 100, name: "Dell Inspiorn Laptop", price: 15000, quantity: 2, categoryID: 10, img: "https://fakeimg.pl/200x100/" },
      { id: 200, name: "Lenovo ThinkPad Laptop", price: 20000, quantity: 12, categoryID: 10, img: "https://fakeimg.pl/200x100/" },
      { id: 300, name: "Apple MacBook Air M2", price: 35000, quantity: 1, categoryID: 10, img: "https://fakeimg.pl/200x100/" },
      { id: 400, name: "Galaxy Tab s7", price: 20000, quantity: 10, categoryID: 20, img: "https://fakeimg.pl/200x100/" },
      { id: 500, name: "Samsung Note 20 Ultra", price: 21000, quantity: 18, categoryID: 30, img: "https://fakeimg.pl/200x100/" },
      { id: 600, name: "Samsung S22 Ultra", price: 25000, quantity: 0, categoryID: 30, img: "https://fakeimg.pl/200x100/" }
    ]

    this.storeDataa = {
      name: 'Elshenawy',
      branches: ['Alexandria', 'Cairo', 'Giza'],
      logoUrl: 'https://fakeimg.pl/50x50/'
    }

    this.clientName = "Mohamed Elzohary";

    this.catList = [
      { name: "Laptops", id: 10 },
      { name: "Tablets", id: 20 },
      { name: "Mobiles", id: 30 }
      
    ]

  }

  ngOnInit(): void {
  }

  isPurshased() {
    this.purshaseFlag = true;
  }

  back(){
    this.purshaseFlag = false;
  }

  whatColor()
  {
    return false;
  }

  buy(prod : Iproduct)
  {
    prod.quantity--;
  }

}
