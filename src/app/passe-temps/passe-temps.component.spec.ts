import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasseTempsComponent } from './passe-temps.component';

describe('PasseTempsComponent', () => {
  let component: PasseTempsComponent;
  let fixture: ComponentFixture<PasseTempsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasseTempsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasseTempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
