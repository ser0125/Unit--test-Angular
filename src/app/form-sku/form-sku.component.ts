import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyValidators } from '../validators';

@Component({
  selector: 'app-form-sku',
  templateUrl: './form-sku.component.html',
  styleUrls: ['./form-sku.component.css']
})
export class FormSkuComponent implements OnInit {
skuForm: FormGroup;
skuField: FormControl;
skuName: FormControl; 

  constructor() {
    this.makeSkuForm();
   }

  ngOnInit() {
  }
  private makeSkuForm(){
    this.skuField = new FormControl('', [Validators.required, MyValidators.skuValidate]);
    this.skuName = new FormControl();
    this.skuForm = new FormGroup({
      sku: this.skuField,
      name: this.skuName
    })
  }
}
