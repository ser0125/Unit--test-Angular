import { Calculator } from './calculator';

describe('Test for calculator', ()=>{
    describe('Test for multiply', ()=>{
        it("Should return 9", ()=> {
            //Arrange
            let calculator = new Calculator;
            //Act
            let result = calculator.multiply(3,3);
            //Assert
            expect(result).toEqual(9);
        })
        it("Should return 4", ()=> {
            //Arrange
            let calculator = new Calculator;
            //Act
            let result = calculator.multiply(1,4);
            //Assert
            expect(result).toEqual(4);
        });
    });
    describe('Test for divide', () => {
        it('Divide for a number', () => {
             //Arrange
             let calculator = new Calculator;
             //Act && Assert
             expect(calculator.divide(9,3)).toEqual(3);
             expect(calculator.divide(5,2)).toEqual(2.5);
        });

        it('Divide for zero', () => {
            //Arrange
            let calculator = new Calculator;
            //Act && Assert
            expect(calculator.divide(9,0)).toBeNull();
            expect(calculator.divide(12312312312,0)).toBeNull();
       })
    });
})