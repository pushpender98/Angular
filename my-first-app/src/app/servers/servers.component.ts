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
  onServerCreate = "Server is not created";
  serverName = "Hello there";
  serverCreated = false;

  constructor() {
    setTimeout(function(){
      this.isServerButtonAllowed = "true";
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.onServerCreate = "Server is created, " + this.serverName;
  }

  onUpdateServerName(event : any){
    //console.log(event);
    //this.serverName = event.target.value; // One Way
    this.serverName = (<HTMLInputElement>event.target).value; // Second  Way
  }
}
