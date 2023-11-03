import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { RealLoginComponent } from './real-login.component';

describe('RealLoginComponent', () => {
  let component: RealLoginComponent;
  let fixture: ComponentFixture<RealLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealLoginComponent]
    });
    fixture = TestBed.createComponent(RealLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
