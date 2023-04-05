import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArgumentCreateComponent } from './argument-create.component';

describe('ArgumentCreateComponent', () => {
  let component: ArgumentCreateComponent;
  let fixture: ComponentFixture<ArgumentCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArgumentCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArgumentCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
