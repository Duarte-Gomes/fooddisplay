import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortugueseComponent } from './portuguese-component';

describe('PortugueseComponent', () => {
  let component: PortugueseComponent;
  let fixture: ComponentFixture<PortugueseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortugueseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortugueseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
