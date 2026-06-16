/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/


function findUniqueElements(array) {
    const ArrayIncludesElement = []
    for (let i=0; i<array.length; i++){

        
        dublicate = includesElement(ArrayIncludesElement, array[i])
//console.log("dublicate " + dublicate);

        if (!dublicate){
             ArrayIncludesElement.push(array[i])
             //console.log("ArrayIncludesElement " + ArrayIncludesElement);
        }
    }
    return ArrayIncludesElement;
}

function includesElement(array, element) {

    for (let i=0; i<array.length; i++){
        if (array[i]===element){
            return true;
        }

    }
return false;
}

//const arrayUniqueElements =findUniqueElements([1, 2, 3, 2, 1, 4]);
//console.log("arrayUniqueElements = " + arrayUniqueElements);
console.log("arrayUniqueElements = " + findUniqueElements([1, 2, 3, 2, 1, 4]));
