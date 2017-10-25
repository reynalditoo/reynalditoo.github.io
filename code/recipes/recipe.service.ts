import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pizza Margherita',
      'Simple but immortal',
      'http://www.academiabarilla.com/anteprima_pizzamargherita_xhm1p-2_1200.jpg?h=faa3bae42d7180a508c490395249247ded3f362c',
      [
        new Ingredient('Tomatoes', 1),
        new Ingredient('Mozarella', 8)
      ]),
    new Recipe('Spaghettis bolognese',
      'An all time classic',
      'http://m.mcdn.fr/files/images/ficherecette/3/3/6/820633/1997432-focus.jpg',
      [
        new Ingredient('Pastas', 20),
        new Ingredient('Tomatoes', 1),
        new Ingredient('Beef', 3)
      ]),
    new Recipe('Sushis',
      'A little taste of Japan',
      'http://www.marecettejaponaise.com/wp-content/uploads/2013/08/sushis-1.jpg',
      [
        new Ingredient('Rice', 10),
        new Ingredient('Tuna', 3)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
