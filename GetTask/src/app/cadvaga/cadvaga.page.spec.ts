import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadvagaPage } from './cadvaga.page';

describe('CadvagaPage', () => {
  let component: CadvagaPage;
  let fixture: ComponentFixture<CadvagaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CadvagaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
