import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenContactMapHubComponent } from './open-contact-map-hub.component';

describe('OpenContactMapHubComponent', () => {
  let component: OpenContactMapHubComponent;
  let fixture: ComponentFixture<OpenContactMapHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenContactMapHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenContactMapHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
