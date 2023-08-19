import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticateTemplateComponent } from './authenticate-template.component';

describe('AuthenticateTemplateComponent', () => {
  let component: AuthenticateTemplateComponent;
  let fixture: ComponentFixture<AuthenticateTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticateTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthenticateTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
