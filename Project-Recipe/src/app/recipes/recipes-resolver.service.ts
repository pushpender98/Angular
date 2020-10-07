import { RecipeService } from './recipes.service';
import { DataStorage } from './../shared/data-storage.service';
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({providedIn: 'root'})
export class RecipeResolverService implements Resolve<Recipe[]>{
    constructor(private dataStorage: DataStorage, private recipeService: RecipeService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const recipe = this.recipeService.getRecipes();

        if(recipe.length === 0){
            return this.dataStorage.fetchRecipe();
        }else {
            return recipe;
        }
    }
}