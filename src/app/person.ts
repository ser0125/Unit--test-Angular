export class Person {
    constructor(
        public name: string,
        public lastname: string,
        public age: number,
        public weight: number,
        public height: number,
      ){}

      calcIMC(): string{
        let result = Math.round(this.weight/(this.height * this.height));
        switch(true){
            case result<0:
            return 'not found';
            case result<18:
            return 'down';
            case (result>=18 && result<=24):
            return 'normal';
            case (result >= 25 && result <= 26):
            return 'overweight';
            case (result >= 27 && result <= 29):
            return 'overweight level 1';
            case (result >= 30 && result <= 39):
            return 'overweight level 2';
            case (result >= 40):
            return 'overweight level 3';
        }
      }
    
}
