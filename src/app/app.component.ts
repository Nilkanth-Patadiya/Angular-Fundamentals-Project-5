import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyFifthProject';
  mark = 0.98;
  doj: Date = new Date();
  num1: number = 123.9;
  nm: string = 'niLkAnTh PaTadiyA';
  sal = 10000;
  dob = new Date(2021, 3, 4);
  p1 = { "productno": 121, "productname": "IPad", "manufacturer": "Apple", "price": 3450 }
  

  Add(n1, n2) {
    return n1 + n2;
  }
}
