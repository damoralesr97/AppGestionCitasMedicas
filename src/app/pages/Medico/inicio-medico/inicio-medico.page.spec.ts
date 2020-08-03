import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InicioMedicoPage } from './inicio-medico.page';

describe('InicioMedicoPage', () => {
  let component: InicioMedicoPage;
  let fixture: ComponentFixture<InicioMedicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioMedicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InicioMedicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
