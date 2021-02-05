import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleDotLoaderComponent } from './circle-dot-loader.component';

describe('CircleDotLoaderComponent', () => {
  let component: CircleDotLoaderComponent;
  let fixture: ComponentFixture<CircleDotLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleDotLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleDotLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
