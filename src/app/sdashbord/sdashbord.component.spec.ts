import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SdashbordComponent } from './sdashbord.component';

describe('SdashbordComponent', () => {
  let component: SdashbordComponent;
  let fixture: ComponentFixture<SdashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SdashbordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SdashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
