import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CitasMedicoPage } from './citas-medico.page';

describe('CitasMedicoPage', () => {
  let component: CitasMedicoPage;
  let fixture: ComponentFixture<CitasMedicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitasMedicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CitasMedicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
