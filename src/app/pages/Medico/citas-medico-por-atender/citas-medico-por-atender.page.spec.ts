import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CitasMedicoPorAtenderPage } from './citas-medico-por-atender.page';

describe('CitasMedicoPorAtenderPage', () => {
  let component: CitasMedicoPorAtenderPage;
  let fixture: ComponentFixture<CitasMedicoPorAtenderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitasMedicoPorAtenderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CitasMedicoPorAtenderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
