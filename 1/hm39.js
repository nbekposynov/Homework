function pow(a, b) {
    let result = a;
  
    for (let i = 1; i < b; i++) {
      result *= b;
    }
  
    return result;
  }
  
  let a = prompt("Введите число", '');
  let b = prompt("Введите степень", '');
  
  if (a < 1) {
    console.log('Степень ${b} не поддерживается');
  } else {
    console.log( pow(a, b) );
  }