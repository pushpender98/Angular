import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingrediants } from './../shared/ingrediants.model';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shoppingList.service';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
  
  private recipe: Recipe[] = [];
  constructor(private shoppingListService: ShoppingListService) {}

  // private recipe: Recipe[] = [
  //     new Recipe(
  //       'A test Recipe',
  //       'This is a test recipe',
  //       'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636',
  //       [
  //           new Ingrediants('meat', 1),
  //           new Ingrediants('French Fries', 20)
  //       ]
  //     ),
  //     new Recipe(
  //       'Another test Recipe',
  //       'This is a test recipe',
  //       'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636',
  //       [
  //         new Ingrediants('Buns', 2),
  //         new Ingrediants('Fries', 10)
  //       ]
  //     ),
  //   ];

  getRecipes() {
    return this.recipe.slice();
  }

  setRecipes(recipes: Recipe[]) {
    this.recipe = recipes;
    this.recipeChanged.next(this.recipe.slice());
  }

  addIngrediantsToShoppingList(ingrediants: Ingrediants[]) {
    this.shoppingListService.addIngrediants(ingrediants);
  }

  getRecipe(index: number) {
    return this.recipe[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipe.push(recipe);
    this.recipeChanged.next(this.recipe.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipe[index] = newRecipe;
    this.recipeChanged.next(this.recipe.slice());
  }

  deleteRecipe(index: number) {
    this.recipe = this.recipe.slice(index, 1);
    this.recipeChanged.next(this.recipe.slice());
  }
}
