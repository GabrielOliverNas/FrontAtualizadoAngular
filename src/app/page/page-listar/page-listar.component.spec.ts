import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListarComponent } from './page-listar.component';

describe('PageListarComponent', () => {
  let component: PageListarComponent;
  let fixture: ComponentFixture<PageListarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageListarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
