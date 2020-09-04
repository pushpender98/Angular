import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '[.app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  isServerButtonAllowed = "false";

  constructor() {
    setTimeout(function(){
      this.isServerButtonAllowed = "true";
    }, 2000);
   }

  ngOnInit(): void {
  }

}
