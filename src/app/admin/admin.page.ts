import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonItemSliding } from '@ionic/angular';
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
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.items = this.homeService.getAllItem();
  }

  create() {
    this.router.navigate(['/admin/create-admin']);
  }

  edit(item: Item, slidingItem: IonItemSliding) {
    slidingItem.close();
    let itemId = item.id;
    this.router.navigate(['/admin/', itemId]);
  }

  delete(itemId) {
    this.homeService.deleteItem(itemId);
    this.items = this.homeService.getAllItem();
  }

  async presentAlert(item: Item, slidingItem: IonItemSliding, $event) {
    if($event.detail.amount == -65 && $event.detail.ratio == -1) {
      const alert = await this.alertCtrl.create({
        header: 'Hapus Barang',
        message: 'Barang yang sudah dihapus, tidak bisa dikembalikan lagi.',
        buttons: [
          {
            text: 'BATAL',
            role: 'cancel',
            handler: () => {slidingItem.close();}
          },
          {
            text: 'HAPUS',
            handler: () => {this.delete(item.id);}
          }
        ]
      });
      await alert.present();
    }
  }
}
