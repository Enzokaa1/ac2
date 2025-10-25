import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadTarefa } from './cad-tarefa';

describe('CadTarefa', () => {
  let component: CadTarefa;
  let fixture: ComponentFixture<CadTarefa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadTarefa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadTarefa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
