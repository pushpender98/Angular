
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  title = 'Project-Recipe';

  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }
  
}
