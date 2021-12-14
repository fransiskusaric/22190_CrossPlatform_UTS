import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from './home.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    items: Item[];
    x: number;

  constructor(
      private homeService: HomeService,
      private router: Router
  ) {}

  ionViewWillEnter() {
      this.items = this.homeService.getAllItem();
      this.x = 0;
  }

    navigation(id: string) {
        if (id !== undefined) {
            this.router.navigate(['home/', id]);
        }
    }
}
