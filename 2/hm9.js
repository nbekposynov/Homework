function Calculator() {
    this.sum = function() {
        this.a + this.b
    };
    this.mul = function () {
        this.a * this.b
    };
    this.read = function() {
        this.a = +prompt('Введите а')
        this.b = +prompt('Введите b')
    }
}



let calculator = new Calculator();
calculator.read();

alert( "Sum=" + console.sum() );
alert( "Mul=" + console.mul() );