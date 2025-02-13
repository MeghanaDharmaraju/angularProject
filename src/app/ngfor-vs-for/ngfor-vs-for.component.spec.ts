import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforVsForComponent } from './ngfor-vs-for.component';

describe('NgforVsForComponent', () => {
  let component: NgforVsForComponent;
  let fixture: ComponentFixture<NgforVsForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgforVsForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgforVsForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
