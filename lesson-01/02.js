/* С помощью цикла while найдите факториал числа 10 и присвойте его переменной factorial

  Справка:
  Факториал числа 𝑛 (обозначается как 𝑛!)  — это произведение всех натуральных чисел от 1 до 𝑛 включительно.
  Например, факториал числа 3 это 1 * 2 * 3 (6).
*/

// your code
let factorial;
const do_ = 10;
let ot=1;
let summ =1;

while (ot<do_) {
  ot++;
  console.log('Значение числа ' + ot );
  summ=summ*ot;
  console.log('Факториал '+' равен ' +summ);
}
factorial=summ;
console.log('Факториал числа итого ' + do_ +' равен ' +factorial);

