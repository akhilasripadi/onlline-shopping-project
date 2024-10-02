import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEmployeeComponent } from './project-employee.component';

describe('ProjectEmployeeComponent', () => {
  let component: ProjectEmployeeComponent;
  let fixture: ComponentFixture<ProjectEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectEmployeeComponent]
    });
    fixture = TestBed.createComponent(ProjectEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
