import { Component, OnInit } from '@angular/core';
import {Category} from "../model/Category";
import {CategoryService} from "../Service/category.service";
import {Router} from "@angular/router";
import {Customer} from "../model/customer";

@Component({
  selector: 'app-categoty',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  Categories: Category[];
  constructor(private CategoryService: CategoryService, private router: Router) { }

  ngOnInit() {
    this.CategoryService.findAll().subscribe(data => {
      this.Categories = data;
    });
  }

  categoryProducts(id: number){}

}
