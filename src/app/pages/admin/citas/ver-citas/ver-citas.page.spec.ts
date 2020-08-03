import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerCitasPage } from './ver-citas.page';

describe('VerCitasPage', () => {
  let component: VerCitasPage;
  let fixture: ComponentFixture<VerCitasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerCitasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerCitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
