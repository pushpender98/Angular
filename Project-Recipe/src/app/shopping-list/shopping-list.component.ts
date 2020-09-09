import { Ingrediants } from './../shared/ingrediants.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediants : Ingrediants[]= [
    new Ingrediants('onion', 30),
    new Ingrediants('tamato', 20)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onIngrediantsAdded(ingrediants:Ingrediants){
    this.ingrediants.push(ingrediants);
  }

}
