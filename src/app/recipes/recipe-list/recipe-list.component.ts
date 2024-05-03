import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Chickpea Curry", "Chickpea Curry recipe description", "https://www.eatingwell.com/thmb/Kx41aHMgb9iAY41IM5eSrQi-3O8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chickpea-curry-chhole-1x1-41ea4d53c7df4fddabd83caa5b57718e.jpg"),
    new Recipe("Chickpea Curry", "Chickpea Curry recipe description", "https://www.eatingwell.com/thmb/Kx41aHMgb9iAY41IM5eSrQi-3O8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chickpea-curry-chhole-1x1-41ea4d53c7df4fddabd83caa5b57718e.jpg"),
  ];

  constructor() {

  }

  ngOnInit(): void {
    
  }

}
