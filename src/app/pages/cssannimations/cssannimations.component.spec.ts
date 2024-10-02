import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssannimationsComponent } from './cssannimations.component';

describe('CssannimationsComponent', () => {
  let component: CssannimationsComponent;
  let fixture: ComponentFixture<CssannimationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CssannimationsComponent]
    });
    fixture = TestBed.createComponent(CssannimationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
