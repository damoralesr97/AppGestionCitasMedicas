import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerRecetaPage } from './ver-receta.page';

describe('VerRecetaPage', () => {
  let component: VerRecetaPage;
  let fixture: ComponentFixture<VerRecetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerRecetaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerRecetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
