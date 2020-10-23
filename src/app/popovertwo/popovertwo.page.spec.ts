import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PopovertwoPage } from './popovertwo.page';

describe('PopovertwoPage', () => {
  let component: PopovertwoPage;
  let fixture: ComponentFixture<PopovertwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopovertwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PopovertwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
