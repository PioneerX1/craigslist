import { Injectable } from '@angular/core';
import { Listing } from './listing.model';
import { LISTINGS } from './mock-listings'

@Injectable()
export class ListingService {

  constructor() { }

  getListings() {
    return LISTINGS;
  }

}
