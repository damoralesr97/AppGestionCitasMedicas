import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecetaPage } from './receta.page';

describe('RecetaPage', () => {
  let component: RecetaPage;
  let fixture: ComponentFixture<RecetaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
