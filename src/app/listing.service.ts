import { Injectable } from '@angular/core';
import { Listing } from './listing.model';
import { LISTINGS } from './mock-listings'

@Injectable()
export class ListingService {

  constructor() { }

  getListings() {
    return LISTINGS;
  }

  getAllListingsById(inputId: number) {
    var output : Listing[] = [];
    for(var i = 0; i < LISTINGS.length; i++) {
      if(LISTINGS[i].categoryId === inputId) {
        output.push(LISTINGS[i]);
      }
    }
    return output;
  }

}
