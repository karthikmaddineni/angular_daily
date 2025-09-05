import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLaunch } from './product-launch';

describe('ProductLaunch', () => {
  let component: ProductLaunch;
  let fixture: ComponentFixture<ProductLaunch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductLaunch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductLaunch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
