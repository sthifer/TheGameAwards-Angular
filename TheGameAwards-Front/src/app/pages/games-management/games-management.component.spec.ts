import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesManagementComponent } from './games-management.component';

describe('GamesManagementComponent', () => {
  let component: GamesManagementComponent;
  let fixture: ComponentFixture<GamesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
