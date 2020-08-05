import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerConsultaPage } from './ver-consulta.page';

describe('VerConsultaPage', () => {
  let component: VerConsultaPage;
  let fixture: ComponentFixture<VerConsultaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerConsultaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerConsultaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
