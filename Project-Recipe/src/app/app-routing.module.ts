import { AuthComponent } from './auth/auth.component';
import { RecipeResolverService } from './recipes/recipes-resolver.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const routes: Routes = [
  {path:'', redirectTo: '/recipes', pathMatch: "full"},
  {path: 'recipes', component:RecipesComponent, children: [
    {path: '', component:RecipeStartComponent},
    {path: 'new', component:RecipeEditComponent},
    {path: ':id', component:RecipeDetailComponent, resolve: [RecipeResolverService]},
    {path: ':id/edit', component:RecipeEditComponent, resolve: [RecipeResolverService]},
  ]},
  {path: 'shoppingList', component:ShoppingListComponent},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
