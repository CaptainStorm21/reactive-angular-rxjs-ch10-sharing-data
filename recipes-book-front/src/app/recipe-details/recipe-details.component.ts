import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../core/services/shared-data.service';
import * as recipeTags from '../core/model/tags';
import { catchError, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  /**
   *
   * step 3 In the RecipeDetails component, we need to consume the last-selected recipe in order to display the details of the last-selected recipe. So, again, we need to inject SharedDataService and subscribe to the selectedRecipeAction$ public observable, which will emit the last-selected recipe, as follows
   */
  constructor(private sharedService: SharedDataService) { }
  selectedRecipe$ = this.sharedService.selectedRecipeAction$;

  ngOnInit(): void {
  }

}
