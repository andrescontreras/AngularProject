import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BlockRoutingService implements CanActivate, CanActivateChild {

  constructor() { }

  canActivate() {
    console.log('i am checking to see if you are logged in');
    return false;
  }

  canActivateChild() {
    console.log('checking child route access');
    return false;
  }
}
