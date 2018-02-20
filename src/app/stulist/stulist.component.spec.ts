import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StulistComponent } from './stulist.component';

describe('StulistComponent', () => {
  let component: StulistComponent;
  let fixture: ComponentFixture<StulistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StulistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StulistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
