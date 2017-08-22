import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Listing } from '../listing.model';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [ListingService]
})
export class DetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private listingService: ListingService
  ) { }

  listingId: number;
  listingToDisplay: Listing;

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.listingId = parseInt(urlParameters['listingId']);
    });
    this.listingToDisplay = this.listingService.getListingById(this.listingId);
  }

}
