import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NewMailPage } from './new-mail.page';

describe('NewMailPage', () => {
  let component: NewMailPage;
  let fixture: ComponentFixture<NewMailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewMailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
