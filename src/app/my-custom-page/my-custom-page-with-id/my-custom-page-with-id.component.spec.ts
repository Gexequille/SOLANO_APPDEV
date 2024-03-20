import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyCustomPageWithIdComponent } from './my-custom-page-with-id.component';

describe('MyCustomPageWithIdComponent', () => {
  let component: MyCustomPageWithIdComponent;
  let fixture: ComponentFixture<MyCustomPageWithIdComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCustomPageWithIdComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyCustomPageWithIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
