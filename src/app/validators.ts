import { FormControl } from "@angular/forms";

export class MyValidators {
    static skuValidate (control: FormControl) {
        let value = control.value;
        if(value.match(/^123/) || value == ''){
            return null;
        }else {
           return {invalidSku: true}
        }
    }
}