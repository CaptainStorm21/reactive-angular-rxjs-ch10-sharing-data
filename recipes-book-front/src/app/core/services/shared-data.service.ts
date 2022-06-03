import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Recipe } from '../model/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  /**
   * A private BehaviorSubject called selectedRecipeSubject to multicast
   * the value of the currently selected recipe, which represents the data to be shared. It is a strongly typed BehaviorSubject. The type of its emissions will be Recipe. We initialize it with an empty object as the default value, since initially, we don't have any selected value. We define the selectedRecipeSubject value as private to protect it from external use; otherwise, any external process could call the next method and change the emissions, which is dangerous
   */
  private selectedRecipeSubject = new BehaviorSubject<Recipe>({});

  /*A public observable that is extracted from selectedRecipeSubject to handle data as an observable. We used the asObservable() method available in the Subject type. The emissions of this observable are consumed in read-only mode. External processes can only consume its emissions, not change them:*/
  selectedRecipeAction$ = this.selectedRecipeSubject.asObservable();

/**
 *
 * Finally, we need to define a method that will update the shared data, which is the selected recipe. This method only calls next on selectedRecipeSubject to notify all subscribers of the last-selected recipe passed as a parameter. The process that updates the selected recipe will call this method:
 */
  updateSelectedRecipe(recipe: Recipe) {
    this.selectedRecipeSubject.next(recipe);
  }

  constructor() { }
}
