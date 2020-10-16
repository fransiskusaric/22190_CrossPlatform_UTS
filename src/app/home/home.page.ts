import { Component } from '@angular/core';
import { Item } from './home.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items: Item[];

  constructor(
    private homeService: HomeService
  ) {}

  ionViewWillEnter() {
    this.items = this.homeService.getAllItem();
  }
}
