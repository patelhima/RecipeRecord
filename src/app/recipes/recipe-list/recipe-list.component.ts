import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe 1','This is simply a test','https://assets.bonappetit.com/photos/5db1ce83358b460009148cb7/3:2/w_1028,c_limit/Basically-Spinach-Tarte-Recipe.jpg'),
    new Recipe('Test Recipe 2','This is simply a test','https://assets.bonappetit.com/photos/5db1ce83358b460009148cb7/3:2/w_1028,c_limit/Basically-Spinach-Tarte-Recipe.jpg')  
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
