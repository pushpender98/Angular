import { ShoppingListService } from './shoppingList.service';
import { Ingrediants } from './../shared/ingrediants.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediants : Ingrediants[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingrediants = this.shoppingListService.getIngrediants();

    this.shoppingListService.ingrediantsChanged.subscribe(
      (ingrediants:Ingrediants[]) => {
        this.ingrediants = ingrediants;
      }
    );
  }

}
