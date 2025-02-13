import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitchVsSwitchComponent } from './ngswitch-vs-switch.component';

describe('NgswitchVsSwitchComponent', () => {
  let component: NgswitchVsSwitchComponent;
  let fixture: ComponentFixture<NgswitchVsSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgswitchVsSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgswitchVsSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
