import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileV14Component } from './profile-v14.component';

describe('ProfileComponent', () => {
  let component: ProfileV14Component;
  let fixture: ComponentFixture<ProfileV14Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileV14Component]
    });
    fixture = TestBed.createComponent(ProfileV14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
