import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Tasty schmitzel',
    'A super-tasty schmitzel - just awesome',
    'https://assets.bonappetit.com/photos/5db1ce83358b460009148cb7/3:2/w_1028,c_limit/Basically-Spinach-Tarte-Recipe.jpg',
    [
      new Ingredient('Meat',1),
      new Ingredient('French Fries',20)
    ]),
    new Recipe('Big fat Burger',
    'What else you need to say?',
    'https://assets.bonappetit.com/photos/5db1ce83358b460009148cb7/3:2/w_1028,c_limit/Basically-Spinach-Tarte-Recipe.jpg',
    [
      new Ingredient('Meat',1),
      new Ingredient('Buns',2)
    ])
  ];

  constructor(private slService: ShoppingListService){

  }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
