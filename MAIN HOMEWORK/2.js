const BigNumber = require('bignumber.js');

// создание объектов BigNumber с помощью строк
const a = new BigNumber('1234567890123456789012345678901234567890');
const b = new BigNumber('9876543210987654321098765432109876543210');

// операции с объектами BigNumber
const sum = a.plus(b);
const diff = a.minus(b);
const prod = a.times(b);
const div = a.dividedBy(b);

console.log(sum.toString()); // '11111111101111111110111111111011111111100'
console.log(diff.toString()); // '-864197532086419753207654320320864197530'
console.log(prod.toString()); // '12193263113702179598084950119701020778144390226327853005943801958423632100000'
console.log(div.toString()); // '0.012345679012345679012345679012345679012346229325'