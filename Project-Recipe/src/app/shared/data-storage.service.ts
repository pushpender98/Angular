import { Recipe } from './../recipes/recipe.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from './../recipes/recipes.service';
import { map, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorage {
    constructor(private http: HttpClient, private recipeService: RecipeService){}

    storeRecipe(): void{
        const recipes = this.recipeService.getRecipes();

        this.http.put('https://recipe-book-5448c.firebaseio.com/recipes.json', recipes).subscribe(
            response => {
                console.log(response);
            }
        );
    }

    fetchRecipe(){
       return this.http
        .get<Recipe[]>('https://recipe-book-5448c.firebaseio.com/recipes.json')
        .pipe(
            map( recipes => {
                return recipes.map(recipe => {
                    return {...recipe, ingrediants: recipe.ingrediants ? recipe.ingrediants : []};
                });
            }),
            tap(
                recipes => {
                    this.recipeService.setRecipes(recipes);
                }
            )
        )
        
    }
}