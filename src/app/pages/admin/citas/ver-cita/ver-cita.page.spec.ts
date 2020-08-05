import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerCitaPage } from './ver-cita.page';

describe('VerCitaPage', () => {
  let component: VerCitaPage;
  let fixture: ComponentFixture<VerCitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerCitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerCitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
