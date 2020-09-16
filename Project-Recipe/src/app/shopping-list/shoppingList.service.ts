import { EventEmitter } from '@angular/core';
import { Ingrediants } from './../shared/ingrediants.model';

export class ShoppingListService  {
    ingrediantsChanged = new EventEmitter<Ingrediants[]>();

    private ingrediants : Ingrediants[]= [
        new Ingrediants('onion', 30),
        new Ingrediants('tamato', 20)
      ];

      getIngrediants() {
          return this.ingrediants.slice();
      }

      addIngrediant(ingrediants:Ingrediants){
            this.ingrediants.push(ingrediants);

            this.ingrediantsChanged.emit(this.ingrediants.slice());
      }

      addIngrediants(ingrediants:Ingrediants[]){
        // for(let ingrediant of ingrediants){
        //     this.addIngrediant(ingrediant);
        // }

        this.ingrediants.push(...ingrediants);
        this.ingrediantsChanged.emit(this.ingrediants.slice());
  }
}