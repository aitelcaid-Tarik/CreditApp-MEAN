import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DureeComponent } from './duree.component';

describe('DureeComponent', () => {
  let component: DureeComponent;
  let fixture: ComponentFixture<DureeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DureeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DureeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
