import { Subject } from 'rxjs';
import { Ingrediants } from './../shared/ingrediants.model';

export class ShoppingListService  {
    ingrediantsChanged = new Subject<Ingrediants[]>();
    startedEditing   = new Subject<number>();  

    private ingrediants : Ingrediants[]= [
        new Ingrediants('onion', 30),
        new Ingrediants('tamato', 20)
      ];

      getIngrediants() {
          return this.ingrediants.slice();
      }
      
      getIngrediant(index: number){
        return this.ingrediants[index];
      }

      addIngrediant(ingrediants:Ingrediants){
            this.ingrediants.push(ingrediants);

            this.ingrediantsChanged.next(this.ingrediants.slice());
      }

      addIngrediants(ingrediants:Ingrediants[]){
        // for(let ingrediant of ingrediants){
        //     this.addIngrediant(ingrediant);
        // }

        this.ingrediants.push(...ingrediants);
        this.ingrediantsChanged.next(this.ingrediants.slice());
      }

      updateIngrediant(index:number, newIngrediant: Ingrediants){
        this.ingrediants[index] = newIngrediant;
        this.ingrediantsChanged.next(this.ingrediants.slice());
      }
      
      deleteIngrediant(index:number){
        this.ingrediants.splice(index, 1);
        this.ingrediantsChanged.next(this.ingrediants.slice());
      }
}