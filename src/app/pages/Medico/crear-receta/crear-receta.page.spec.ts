import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearRecetaPage } from './crear-receta.page';

describe('CrearRecetaPage', () => {
  let component: CrearRecetaPage;
  let fixture: ComponentFixture<CrearRecetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearRecetaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearRecetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
