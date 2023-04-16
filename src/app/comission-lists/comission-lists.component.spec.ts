import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComissionListsComponent } from './comission-lists.component';

describe('ComissionListsComponent', () => {
  let component: ComissionListsComponent;
  let fixture: ComponentFixture<ComissionListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComissionListsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComissionListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
