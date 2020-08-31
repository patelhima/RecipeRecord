import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  
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

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }
}
