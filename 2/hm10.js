function Accumulator(a){
    this.value = a
    
    this.read = function(){
        this.value += +prompt("Введите число пользователей", "")
    }
}




let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений