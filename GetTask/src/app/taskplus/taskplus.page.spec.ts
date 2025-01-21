import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskplusPage } from './taskplus.page';

describe('TaskplusPage', () => {
  let component: TaskplusPage;
  let fixture: ComponentFixture<TaskplusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskplusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
