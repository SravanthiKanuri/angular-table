import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivitylabsComponent } from './motivitylabs.component';

describe('MotivitylabsComponent', () => {
  let component: MotivitylabsComponent;
  let fixture: ComponentFixture<MotivitylabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotivitylabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotivitylabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
