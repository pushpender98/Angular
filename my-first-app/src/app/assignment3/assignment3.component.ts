import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  showPara:Boolean = false;
  noOfClick: number = 0;
  logArray:Array<number> = [];

  constructor() { }

  ngOnInit(): void {
  }

  toogleButton(){
    this.showPara = !this.showPara;
    this.logArray.push(this.noOfClick++);
  }
}
