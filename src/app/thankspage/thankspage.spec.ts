import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thankspage } from './thankspage';

describe('Thankspage', () => {
  let component: Thankspage;
  let fixture: ComponentFixture<Thankspage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Thankspage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Thankspage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
