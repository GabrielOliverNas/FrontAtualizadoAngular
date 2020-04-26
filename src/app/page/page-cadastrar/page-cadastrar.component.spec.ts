import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCadastrarComponent } from './page-cadastrar.component';

describe('PageCadastrarComponent', () => {
  let component: PageCadastrarComponent;
  let fixture: ComponentFixture<PageCadastrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCadastrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCadastrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
