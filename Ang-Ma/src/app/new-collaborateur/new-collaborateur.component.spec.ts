import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCollaborateurComponent } from './new-collaborateur.component';

describe('NewCollaborateurComponent', () => {
  let component: NewCollaborateurComponent;
  let fixture: ComponentFixture<NewCollaborateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewCollaborateurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCollaborateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
