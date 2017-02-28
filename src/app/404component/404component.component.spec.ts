import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { 404componentComponent } from './404component.component';

describe('404componentComponent', () => {
  let component: 404componentComponent;
  let fixture: ComponentFixture<404componentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 404componentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(404componentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
