import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SujetCreateComponent } from './sujet-create.component';

describe('SujetCreateComponent', () => {
  let component: SujetCreateComponent;
  let fixture: ComponentFixture<SujetCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SujetCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SujetCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
