import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuiteComponent } from './annuite.component';

describe('AnnuiteComponent', () => {
  let component: AnnuiteComponent;
  let fixture: ComponentFixture<AnnuiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnuiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
