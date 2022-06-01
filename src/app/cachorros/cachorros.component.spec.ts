import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CachorrosComponent } from './cachorros.component';

describe('CachorrosComponent', () => {
  let component: CachorrosComponent;
  let fixture: ComponentFixture<CachorrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CachorrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CachorrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
