import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { Category } from '../category.model';
import { CategoryService } from '../category.service';

import { Listing } from '../listing.model';
import { ListingService } from '../listing.service';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
  providers: [CategoryService, ListingService]
})
export class ListingComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private categoryService: CategoryService,
    private listingService: ListingService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.categoryId = parseInt(urlParameters['categoryId']);
    });
    this.listingsToDisplay = this.listingService.getAllListingsById(this.categoryId);
  }

  goToDetailsPage(clickedListing: Listing) {
    this.router.navigate(['categories/:categoryId/listings', clickedListing.listingId]);
  }

  categoryId: number;
  listingsToDisplay: Listing[];
}
