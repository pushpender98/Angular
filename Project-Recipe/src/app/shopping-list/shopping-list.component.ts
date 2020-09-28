import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ShoppingListService } from './shoppingList.service';
import { Ingrediants } from './../shared/ingrediants.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingrediants : Ingrediants[];
  igChanged: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingrediants = this.shoppingListService.getIngrediants();

    this.igChanged = this.shoppingListService.ingrediantsChanged.subscribe(
      (ingrediants:Ingrediants[]) => {
        this.ingrediants = ingrediants;
      }
    );
  }

  ngOnDestroy(): void {
    this.igChanged.unsubscribe();
    
  }

  onEditItem(index:number){
    this.shoppingListService.startedEditing.next(index);
  }

}
