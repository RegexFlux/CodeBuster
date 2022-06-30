import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOptionalComponent } from './input-optional.component';

describe('InputOptionalComponent', () => {
  let component: InputOptionalComponent;
  let fixture: ComponentFixture<InputOptionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOptionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputOptionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
