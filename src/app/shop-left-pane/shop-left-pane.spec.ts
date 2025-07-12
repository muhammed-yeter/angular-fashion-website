import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopLeftPane } from './shop-left-pane';

describe('ShopLeftPane', () => {
  let component: ShopLeftPane;
  let fixture: ComponentFixture<ShopLeftPane>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopLeftPane]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopLeftPane);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
