// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code
let sum=0;
let ot = 1;
const do_=20;

while (ot < do_) {
    console.log('Значение числа ' + ot);
    
    sum = sum + ot;
    console.log('Промежуточная сумма: ' +sum);
    ot++;
}
console.log('Сумма итого: ' +sum);
