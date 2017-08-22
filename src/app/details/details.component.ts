import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Category } from '../category.model';
import { CategoryService } from '../category.service';

import { Listing } from '../listing.model';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [ListingService, CategoryService]
})
export class DetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private listingService: ListingService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.categoryId = parseInt(urlParameters['categoryId']);
      this.listingId = parseInt(urlParameters['listingId']);
    });
    this.listingToDisplay = this.listingService.getListingById(this.listingId);
  }

  listingId: number;
  listingToDisplay: Listing;
  categoryId: number;

}
