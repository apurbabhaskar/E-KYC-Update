import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseLeftSidebarComponent } from './base-left-sidebar.component';

describe('BaseLeftSidebarComponent', () => {
  let component: BaseLeftSidebarComponent;
  let fixture: ComponentFixture<BaseLeftSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseLeftSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
