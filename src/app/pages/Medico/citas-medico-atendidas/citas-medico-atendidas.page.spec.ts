import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CitasMedicoAtendidasPage } from './citas-medico-atendidas.page';

describe('CitasMedicoAtendidasPage', () => {
  let component: CitasMedicoAtendidasPage;
  let fixture: ComponentFixture<CitasMedicoAtendidasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitasMedicoAtendidasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CitasMedicoAtendidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
