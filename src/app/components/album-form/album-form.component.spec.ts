import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumFormComponent } from './album-form.component';

describe('AlbumFormComponent', () => {
  let component: AlbumFormComponent;
  let fixture: ComponentFixture<AlbumFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumFormComponent]
    });
    fixture = TestBed.createComponent(AlbumFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
