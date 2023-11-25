import { Component, EventEmitter, Output } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { paymentMethod } from '../user.payment';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public buyLoader = false;
  public paymentOptions:any[]=[];
  public loading: boolean = true;
  public searchInput: string = '';
  public filteredProducts: any[] = [];
  public categories: any;
  public showDialog: boolean = true;
  public Dialog: boolean = false;
  public visible: boolean = false;
  public paymentDetailsForm: boolean = false
  public products: any[] = [];
  public cartItem: any[] = [];
  public userList:any[]=[];
  public counter: number = 0;
  public price: number = 0;

 
  constructor(private router: Router) { }
  ngOnInit(): void {
    this.paymentOptions= paymentMethod;
    console.log(this.paymentOptions,"payment options");
    this.getAllProducts();
    this.getCategories();
    this.filterProducts();
    
   


  }
  paymentForm = new FormGroup({
    username: new FormControl(),
    paymentMethod: new FormControl()
  })
 

  changeCatageory(e: any) {
    console.log(e.target.value);

    if (e.target.value == 'all') {
      this.getAllProducts();
    } else {
      fetch(`https://fakestoreapi.com/products/category/${e.target.value}`)
        .then((res) => res.json())
        .then((data) => {
          this.products = data;
         
        });
    }
  }

  getAllProducts() {

    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        this.products = data;
        console.log(this.products)
      });

  }
 
  // toggleLoader() {
  //   this.showLoader = true;

  //   setTimeout(() => {

  //     this.showLoader = false;
  //    this.showDialog=true;
  //   }, 2000); 
  // }
  toggleLoader() {
    this.loading = true;
    this.loading = false;
    this.showDialog = true;

  }


  getCategories() {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((data) => {
        data.unshift('all');
        this.categories = data;
        console.log(this.categories)
      });
  }

  addCart(item: any) {

    this.cartItem.push(item);
    this.counter = this.cartItem.length;
    this.calculateTotalPrice();
  }
  calculateTotalPrice() {
    this.price = this.cartItem.reduce((total, item) => total + item.price, 0);
  }
  cart() {
    console.log('hello');
    this.showDialog = false;
    this.visible = true;

  }

  filterProducts() {
    console.log(this.searchInput);
    let searchInput = this.searchInput;

    if (searchInput) {
      searchInput = searchInput.toLowerCase();
    } else {
      searchInput = '';
    }

    const filteredProducts = this.products.filter((item) =>
      item.title.toLowerCase().includes(searchInput)
    );
    console.log(filteredProducts);
    this.products = filteredProducts;
  }

  buy() {
    this.buyLoader = true;

    setTimeout(() => {

      this.buyLoader = false;
     this.Dialog=true;
    }, 2000); 


  }
 
  payMent() {
    console.log("akhila")
    this.Dialog = false;
    this.paymentDetailsForm = true;
  }
}
