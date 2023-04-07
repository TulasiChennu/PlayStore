import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddplaycardComponent } from './addplaycard.component';

describe('AddplaycardComponent', () => {
  let component: AddplaycardComponent;
  let fixture: ComponentFixture<AddplaycardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddplaycardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddplaycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
