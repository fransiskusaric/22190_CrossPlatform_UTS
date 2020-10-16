import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../home/home.model';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  items: Item[];

  constructor(
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.items = this.homeService.getAllItem();
  }

  create() {
    this.router.navigate(['/admin/create-admin']);
  }
}
