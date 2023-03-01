let calculator = {
 sum(){
    return this.a + this.b
   },
mul(){
    return this.a * this.b 
},
read(){
    this.a = +prompt('Write a')
    this.b = +prompt('Write b')  
  }
};
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );