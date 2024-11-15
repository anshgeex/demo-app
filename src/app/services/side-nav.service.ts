import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  getCurrentRoute() {
    return this.activatedRoute.snapshot.url.join('/');
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}