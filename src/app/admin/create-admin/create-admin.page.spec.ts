import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateAdminPage } from './create-admin.page';

describe('CreateAdminPage', () => {
  let component: CreateAdminPage;
  let fixture: ComponentFixture<CreateAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
