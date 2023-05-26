import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageemployeComponent } from './pageemploye.component';

describe('PageemployeComponent', () => {
  let component: PageemployeComponent;
  let fixture: ComponentFixture<PageemployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageemployeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageemployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
