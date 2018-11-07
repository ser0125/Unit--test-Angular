import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSkuComponent } from './form-sku.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('FormSkuComponent', () => {
  let component: FormSkuComponent;
  let fixture: ComponentFixture<FormSkuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSkuComponent ],
      imports: [ReactiveFormsModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSkuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be skuForm', () => {
    expect(component.skuForm).toBeTruthy();
  });
  it('should be skuField', () => {
    expect(component.skuField).toBeTruthy();
  });
  it('should be skuName', () => {
    expect(component.skuName).toBeTruthy();
  });
  describe('test for skuField', () => {
    it('should not show error invalidSku', () => {
      component.skuField.setValue('1234');
      expect(component.skuField.valid).toBe(true);
    });
    it('should show error invalidSku', () => {
      component.skuField.setValue('Jijiji');
      expect(component.skuField.invalid).toBe(true);
      expect(component.skuField.getError('invalidSku')).toBeTruthy();
    });
    it('should show a required error', () => {
      expect(component.skuField.invalid).toBeTruthy();
      expect(component.skuField.getError('required')).toBeTruthy();
    });
    it('should show an error in the template: "invalidSku"', async(() => {
      let de = fixture.debugElement.query(By.css('#skuInput')).nativeElement;
      de.value = "4343";
      de.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      fixture.whenStable().then(()=>{
        let msgs: any[] = fixture.nativeElement.querySelectorAll('.ui.message');
        expect(msgs.length).toBe(1);
        expect(msgs[0].innerHTML).toContain("SKU is invalid");
      });
    }));
    it('should show an error in the template: "required"', async(() => {
      let de = fixture.debugElement.query(By.css('#skuInput')).nativeElement;
      de.value = "";
      de.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      fixture.whenStable().then(()=>{
        let msgs: any[] = fixture.nativeElement.querySelectorAll('.ui.message');
        expect(msgs.length).toBe(1);
        expect(msgs[0].innerHTML).toContain("SKU is required");
      });
    }));
  })
});
