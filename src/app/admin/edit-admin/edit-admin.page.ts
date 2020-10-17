import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { Item } from 'src/app/home/home.model';
import { HomeService } from 'src/app/home/home.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.page.html',
  styleUrls: ['./edit-admin.page.scss'],
})
export class EditAdminPage implements OnInit {
  detailItem: Item;
  form: FormGroup;
  jenis: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private homeService: HomeService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('itemId')) {
        return;
      } else {
        const itemId = paramMap.get('itemId');
        this.detailItem = this.homeService.getItem(itemId);
      }
    });

    this.form = new FormGroup( {
      foto: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.pattern(".*\.jpg")]
      }),
      merek: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.maxLength(20)]
      }),
      model: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.maxLength(25)]
      }),
      harga: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.min(0)]
      }),
      stok: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.min(1)]
      }),
      baseClock: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.min(0)]
      }),
      boostClock: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.min(0)]
      }),
      core: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.min(0)]
      }),
      thread: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.min(0)]
      }),
      speed: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.min(0)]
      }),
      ukuran: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.min(0)]
      }),
      chipset: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      prosesor: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
    });
  }

  ionViewWillEnter() {
    this.jenis = this.detailItem.id.substring(0, 1);
  }

  onSubmit() {
    console.log(this.form);
    this.presentAlert();
    this.homeService.updateItem(this.form, this.detailItem.id);
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Simpan Perubahan',
      message: 'Apakah Anda yakin untuk menyimpan perubahan?',
      buttons: [
        {
          text: 'BATAL',
          role: 'cancel'
        },
        {
          text: 'SIMPAN',
          handler: () => {this.presentLoading();}
        }
      ]
    });
    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Menyimpan perubahan...',
      duration: 1000
    });

    await loading.present();

    loading.onDidDismiss().then(() => {
      this.presentToast();
      this.navCtrl.navigateBack('/admin');
    });
  }

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: 'Perubahan berhasil disimpan',
      duration: 3000,
      color: "primary",
      position: 'bottom'
    });
  
    await toast.present();
  }
}
