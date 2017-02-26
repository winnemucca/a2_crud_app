import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaffeineLibraryComponent } from './caffeine-library.component';

describe('CaffeineLibraryComponent', () => {
  let component: CaffeineLibraryComponent;
  let fixture: ComponentFixture<CaffeineLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaffeineLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaffeineLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
