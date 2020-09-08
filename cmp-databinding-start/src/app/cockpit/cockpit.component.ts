import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
 /**
  * Best Learning here: serve and blueprint are the same function here that we have used as a event binding
  */
 @Output() server: EventEmitter<{serverName: string, serverContent: string}> = new EventEmitter(); 
 // Second way
 @Output() blueprint = new EventEmitter<{serverName: string, serverContent: string}>(); 
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }
  
  onAddServer() {
    this.server.emit({serverName : this.newServerName, serverContent: this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprint.emit({serverName : this.newServerName, serverContent: this.newServerContent});
  }
}
