import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.page.html',
  styleUrls: ['./create-admin.page.scss'],
})
export class CreateAdminPage implements OnInit {
  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup( {
      foto: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.pattern(".*\.jpg")]
      }),
      jenis: new FormControl(null, {
        updateOn: 'change',
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
        validators: [Validators.required, Validators.min(1)]
      }),
      boostClock: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.min(1)]
      }),
      core: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.min(1)]
      }),
      thread: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required, Validators.min(1)]
      }),
    });
  }

  onSubmit(form: FormGroup) {
    console.log(form);
  }
}
