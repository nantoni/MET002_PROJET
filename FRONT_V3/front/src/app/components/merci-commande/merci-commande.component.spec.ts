import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerciCommandeComponent } from './merci-commande.component';

describe('MerciCommandeComponent', () => {
  let component: MerciCommandeComponent;
  let fixture: ComponentFixture<MerciCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerciCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerciCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
