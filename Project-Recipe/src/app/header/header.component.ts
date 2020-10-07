import { DataStorage } from './../shared/data-storage.service';

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 // @Output() featureSelected = new EventEmitter<string>();

 constructor(private dataStorage: DataStorage){}
  // onSelect(feature: string){
  //   this.featureSelected.emit(feature);
  // }

  onSaveData(): void {
    this.dataStorage.storeRecipe();
  }

  onFetchData(): void {
    this.dataStorage.fetchRecipe().subscribe();
  }
}
