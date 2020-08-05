import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarCitaPage } from './editar-cita.page';

describe('EditarCitaPage', () => {
  let component: EditarCitaPage;
  let fixture: ComponentFixture<EditarCitaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCitaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarCitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
