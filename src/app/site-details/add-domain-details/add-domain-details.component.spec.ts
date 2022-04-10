import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDomainDetailsComponent } from './add-domain-details.component';

describe('AddDomainDetailsComponent', () => {
  let component: AddDomainDetailsComponent;
  let fixture: ComponentFixture<AddDomainDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDomainDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDomainDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
