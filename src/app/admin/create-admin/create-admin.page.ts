import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { HomeService } from 'src/app/home/home.service';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.page.html',
  styleUrls: ['./create-admin.page.scss'],
})
export class CreateAdminPage implements OnInit {
  form: FormGroup;
  type: string;

  constructor(
    private homeService: HomeService,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.form = new FormGroup( {
      foto: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.pattern(".*\.jpg")]
      }),
      jenis: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
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

  onSubmit() {
    this.homeService.createItem(this.form);
    this.presentLoading();
  }

  onChange($event) {
    this.type = $event.detail.value;
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Menambahkan barang...',
      duration: 2000
    });

    await loading.present();

    loading.onDidDismiss().then(() => {
      this.presentToast();
      this.navCtrl.navigateBack('/admin');
    });
  }

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: 'Item berhasil ditambahkan',
      duration: 3000,
      color: "success",
      position: 'bottom'
    });
  
    await toast.present();
  }
}
