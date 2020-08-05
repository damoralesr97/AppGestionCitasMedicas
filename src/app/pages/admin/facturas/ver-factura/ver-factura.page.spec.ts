import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerFacturaPage } from './ver-factura.page';

describe('VerFacturaPage', () => {
  let component: VerFacturaPage;
  let fixture: ComponentFixture<VerFacturaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerFacturaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerFacturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
