import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloworldComponent } from './helloworld.component';

describe('HelloworldComponent', () => {
  let component: HelloworldComponent;
  let fixture: ComponentFixture<HelloworldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloworldComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HelloworldComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
