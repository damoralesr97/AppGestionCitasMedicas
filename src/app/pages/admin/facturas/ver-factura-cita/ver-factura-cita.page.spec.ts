import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerFacturaCitaPage } from './ver-factura-cita.page';

describe('VerFacturaCitaPage', () => {
  let component: VerFacturaCitaPage;
  let fixture: ComponentFixture<VerFacturaCitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerFacturaCitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerFacturaCitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
