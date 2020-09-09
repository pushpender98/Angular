
import { Component, OnInit, Input, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterContentInit {
  @Input() element: { 
    type: string,
    name: string,
    content: string
  };

  @ContentChild('contentPara', {static: true}) paragraph: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(){
    console.log(this.paragraph.nativeElement.textContent);
  }

}
