import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  /**
   * Best Learning here: serve and blueprint are the same function here that we have used as a event binding
   */
  @Output() server: EventEmitter<{
    serverName: string;
    serverContent: string;
  }> = new EventEmitter();
  // Second way
  @Output() blueprint = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // newServerName = '';
  //newServerContent = "";
  // Getting access to Template and DOM
  @ViewChild('newServerContent', {static: true}) serverContentInput: ElementRef;   

  constructor() {}

  ngOnInit(): void {}

  onAddServer(newServername: HTMLInputElement) {
    this.server.emit({
      serverName: newServername.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(newServername: HTMLInputElement) {
    this.blueprint.emit({
      serverName: newServername.value,
      serverContent:this.serverContentInput.nativeElement.value,
    });
  }
}
