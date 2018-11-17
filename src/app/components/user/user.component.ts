import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  numbers:number[];
  painLevelValue:number;
  show:boolean;
  selectedIndex:number;

  constructor() { }

  ngOnInit() {
    this.name = 'Lahiru';
    this.numbers = Array.from(Array(100).keys());
    this.painLevelValue = 0;
    this.show = true;
  }

  hidePainLevel() {
    this.show = false;
    this.selectedIndex = -1;
  }

  detectPainLevel(index) {
    if(!this.show)
     this.show = true;
    this.selectedIndex = index;
    this.painLevelValue = index + 1;
  }
}
