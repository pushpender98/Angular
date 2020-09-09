import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  id: number = 0;
  interval;
  constructor() { }

  ngOnInit(): void {
  }

  startIncrement = () => {
    this.interval = setInterval(()=>{
      this.intervalFired.emit(this.id = this.id + 1);
    }, 1000);
  }

  stopIncrement(){
    clearInterval(this.interval);
  }
}
