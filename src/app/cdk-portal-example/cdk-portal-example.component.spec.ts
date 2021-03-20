import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkPortalExampleComponent } from './cdk-portal-example.component';

describe('CdkPortalExampleComponent', () => {
  let component: CdkPortalExampleComponent;
  let fixture: ComponentFixture<CdkPortalExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkPortalExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdkPortalExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
