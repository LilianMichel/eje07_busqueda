import { Component } from '@angular/core';
import { Ingredient } from '../models/ingredient.service';
import { IngredientService } from '../services/ingredient.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  ingredients: Ingredient[];
  search: string;

  constructor(private ingredientService: IngredientService, private router: Router) {
    this.ingredients = this.ingredientService.getIngredients();
  }

  changeStatus(pos: number): void {
    this.ingredientService.changeStatus(pos);
  }

  newIngredient(): void {
    this.router.navigate(['/new-ingredient']);
  }

  clearSearch(): void {
    this.ingredients = this.ingredientService.getIngredients();
  }

  filter(): void {
    this.clearSearch();

    if (this.search && this.search.trim()) {
      this.ingredients = this.ingredients.filter( (student) => {
        return ((student.name.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase()) > -1)  ||
         (student.imagen.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase()) > -1));
      });

    }
  }




















 

}
