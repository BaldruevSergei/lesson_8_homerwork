const numbers = [22,24,23,67,26,0,35];
//Поиск максимального числа: Условие: Напишите программу, которая находит максимальное число из массива и выводит его.

let max= numbers[0];
for (let i=0; i<numbers.length;i++) {
    console.log(numbers[i]);
    if(numbers[i] > max) {
        max = numbers[i];
    }
} console.log(max)

for(number of numbers){
    if(number > max) {
        max = number;
    }

}console.log(max)

//Генератор таблицы умножения: Условие: Выведите таблицу умножения для числа 5.
const numbers2 = [0,1,2,3,4,5,6,7,8,9,10];
const five = 5;
for(number of numbers2) {
    console.log(`${number} * ${five}  = ${number * five}`);
}
const multiplier = 5;

for (let i = 0; i <= 10; i++) {
    const result = i * multiplier;
    console.log(`${i} * ${multiplier} = ${result}`);
}

// Подсчет четных чисел: Условие: Напишите программу, которая подсчитывает количество четных чисел в заданном массиве.

let res = 0;
for(number of numbers2){
    if(number % 2 === 0) {
        res ++;
    }
}
console.log(res);

// Реверс массива: Условие: Напишите программу, которая переворачивает заданный массив.
const newarr = [numbers2];
for(let i = numbers2.length; i > 0; i--){
    for (let j = 0; i < newarr.length; j++) {
        newarr[j] = numbers2[i];
        

    }
}
for(arr of newarr) {
   console.log(arr);    
}
// вариант 2 
const newarr1 = [numbers2];
const reversArray = newarr1.reverse();
console.log("Старый массив = ", newarr1);
for(arr of newarr1) {
    console.log(arr);    
 }
console.log("Новый массив = ", reversArray);
for(arr of reversArray) {
    console.log(arr);    
 }

        
    
