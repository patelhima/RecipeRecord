import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(private recipeService: RecipeService,private route: ActivatedRoute) { 
    //this.recipe = this.recipeService.getRecipe(this.index);
    
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
           this.recipe = this.recipeService.getRecipe(this.index);
           console.log(this.recipe);
        })
  }

}
