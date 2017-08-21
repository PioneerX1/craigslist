import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Listing } from '../listing.model';
import { ListingService } from '../listing.service';

import { Category } from '../category.model';
import { CategoryService } from '../category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [ListingService, CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(
    private router: Router,
    private listingService: ListingService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.listings = this.listingService.getListings();
    this.categories = this.categoryService.getCategories();
  }

  listings: Listing[];
  categories: Category[];

}
