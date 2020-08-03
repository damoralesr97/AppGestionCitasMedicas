import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerFacturasPage } from './ver-facturas.page';

describe('VerFacturasPage', () => {
  let component: VerFacturasPage;
  let fixture: ComponentFixture<VerFacturasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerFacturasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerFacturasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
