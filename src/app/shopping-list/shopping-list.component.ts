import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  
  ingredients: Ingredient[] = [
    new Ingredient("Tomatoes", 15),
    new Ingredient("Apples", 10)
  ];

  constructor() {}

  ngOnInit(): void {
  }

}
