import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewplaycardComponent } from './viewplaycard.component';

describe('ViewplaycardComponent', () => {
  let component: ViewplaycardComponent;
  let fixture: ComponentFixture<ViewplaycardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewplaycardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewplaycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
