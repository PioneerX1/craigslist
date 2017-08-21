import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from '../listing.model';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [ListingService]
})
export class CategoryComponent implements OnInit {

  constructor(private router: Router, private listingService: ListingService) { }

  ngOnInit() {
    this.listings = this.listingService.getListings();
  }

  listings: Listing[];

}
