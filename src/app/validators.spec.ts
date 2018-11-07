import { MyValidators } from "./validators";
import { FormControl } from "@angular/forms";

describe("test for Validators", () => {
    describe("test for MyValidators", () => {
        it("should return null for '1234'", () => {
            let formControl = new FormControl();
            formControl.setValue("1234");
            let result = MyValidators.skuValidate(formControl);
            expect(result).toBeNull();
        });
        it("should return null for ''", () => {
            let formControl = new FormControl();
            formControl.setValue("");
            let result = MyValidators.skuValidate(formControl);
            expect(result).toBeNull();
        });
        it("should return invalidSku true", () => {
            let formControl = new FormControl();
            formControl.setValue("222");
            let result = MyValidators.skuValidate(formControl);
            expect(result.invalidSku).toBeTruthy();
        })
    })
})