/** ЗАДАЧИ ПО ПРОГРАММИРОВАНИЮ. */
console.log('***ЗАДАЧИ ПО ПРОГРАММИРОВАНИЮ.***')

/** ВАЖНОЕ ПРИМЕЧАНИЕ. */
/** Поскольку сразу начал писать на JS, а не TS,
 * пришлось позже добавлять лишнии проверки связанные с типизацией данных на вход,
 * поскольку в задачах четко указан тип входных данных. Исправления делал поверх написанного,
 * из-за этого колличество кода выросло в 2 и более раза, стало совсем не красиво:(
 * Но условия есть условия, оставляю так, но способен переписать на TS в дальнейшем.
*/

/** 1. Редактирование массива.
 * Принимает массив городов.
 * Возвращает строку, где города разделены запятыми, а в конце стоит точка.
 * Затрачено ~6min c тестами.
 * Улучшено!
 * 1. Можно задать колличество выдаваемых городов, редактируя интервал точками startPoint и endPoint.
 * 2. Проверка на корректность передаваемых данных.
 */
const makeString = (inputArray, start = 0, end = inputArray.length) =>
  Array.isArray(inputArray) &&
  typeof start === 'number' &&
  typeof end === 'number' &&
  start >= 0 &&
  start < end &&
  start < inputArray.length
    ? inputArray.slice(start, end).join(', ') + '.'
    : 'wrong data';

const isCitiesArray = [
  'Абрамцево',
  'Алабино',
  'Апрелевка',
  'Архангельское',
  'Ашитково',
  'Байконур',
  'Бакшеево',
  'Балашиха',
  'Барыбино',
  'Белоомут',
  'Белые',
  'Столбы',
  'Бородино',
  'Бронницы'
];

const isStartPointForMakeString = 0; // Начальный индекс для массива citiesArray.
const isEndPointForMakeString = 10; // Конечный индекс для массива citiesArray.
const isCities = makeString(isCitiesArray, isStartPointForMakeString, isEndPointForMakeString);
// isCities - отредактируеммый массив городов сконвертированный в строку.
console.log({ Cities: isCities }); // Вывод в консоль результата.

/** 2. Округление до пятерок.
 * Принимает число.
 * Возвращает число, округленное до пятерок.
 * Затрачено ~3min c тестами.
 * Улучшено!
 * Проверка на корректность передаваемых данных.
 */
const roundedToFive = (number) =>
  typeof number === 'number' ? Math.round(number / 5) * 5 : 'wrong data';

const isNumberForRounded = 41.7; // Число которое нужно округлить.
const isRounded = roundedToFive(isNumberForRounded); // Округленное число.
console.log({ Number: isNumberForRounded ,Rounded: isRounded }); // Вывод в консоль результата.

/** 3. Редактор окончаний.
 * Принимает число.
 * Возвращает слово “компьютер” в падеже, в соответствующем указанному количеству.
 * Затрачено ~9min c тестами.
 * Улучшено!
 * 1. Может принимать любой массив слов с необходимыми словами для склонения.
 * 2. Проверка на корректность передаваемых данных.
 */
const declensionForWords = (number, words = isDictionaryForDeclension) =>
  typeof number === 'number' && Array.isArray(words)
    ? number +
      ' ' +
      words[
        number % 100 > 4 && number % 100 < 20
          ? 2
          : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]
      ]
    : 'wrong data';

const isNumberForDeclension = 10; // Колличество для склонения.
const isDictionaryForDeclension = ['компьютер', 'компьютера', 'компьютеров']; // Словарь для склонения.
const isDeclension = declensionForWords(isNumberForDeclension); // Склоненное слово.
console.log({ Declension: isDeclension }); // Вывод в консоль результата.

/** 4. Определить является ли число простым.
 * Принимает целое число.
 * Возвращает является ли число простым.
 * Затрачено ~5min c тестами.
 * Улучшено!
 * Проверка на корректность передаваемых данных.
 */
function isPrime(number) {
  if (Number.isInteger(number) !== true) return 'wrong data';
  let squareRoot = Math.floor(Math.sqrt(number));
  let prime = number != 1;
  for (let i = 2; i < squareRoot + 1; i++) {
    if (number % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

const isNumberForIsPrime = 2; // Проверяеммое число.
const isPrimeNumber = isPrime(isNumberForIsPrime); // Ответ является ли число простым.
console.log({Number: isNumberForIsPrime, 'Is Prime': isPrimeNumber }); // Вывод в консоль результата.

/** 5. Найти элементы которые присутствуют в двух экземплярах в каждом из массиве.
 * Принимает массивы.
 * Возвращает массив с необходимыми совпадениями.
 * Затрачено ~20min c тестами.
 * Улучшено!
 * 1. Может принимать более 2-х массивов для поиска совпадений.
 * 2. Проверка на корректность передаваемых данных.
 */
const findMatches = (...params) => {
  const arrayOfTypes = [];
  params.map((item) => {
    if (!Array.isArray(item)) arrayOfTypes.push(false);
  });
  const found = (array) => {
    const resultsArray = [];
    const unique = (values) => Array.from(new Set(values));
    const duplicates = (values) =>
      unique(values.filter((number, index, numbers) => numbers.indexOf(number) !== index));
    array.map((currentArray) => {
      resultsArray.push(duplicates(currentArray));
    });
    return duplicates(resultsArray.flat());
  };
  return Array.isArray(params) && !arrayOfTypes.includes(false) ? found(params) : 'wrong data';
};

const isArrayForFindMatches1 = [7, 17, 1, 9, 1, 17, 56, 56, 23]; // Сравниваеммый массив 1.
const isArrayForFindMatches2 = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1]; // Сравниваеммый массив 2.
const isMatches = findMatches(isArrayForFindMatches1, isArrayForFindMatches2);
// Массив всех найденных совпадений.
console.log({ Matches: isMatches.join() }); // Вывод в консоль результата.

/** 6. Вывести таблицу умножения.
 * Принимает число до которого нужно построить таблицу.
 * Выводит в консоль таблицу умножения до указанного числа.
 * Затрачено много времени.
 * Пришлось рисовать матрицу и алгоритм заполнениястобы решить проблему с отступами.
 */
const multiply = (maxNumber) => {
  if (typeof maxNumber !== 'number') return console.log('wrong data')
  const separator = ' ';

  const createArrayForLine = (endPoint, factor = 1) => {
    const result = [];
    for (let i = 1; i <= endPoint; i++) {
      result.push(String(i * factor));
    }
    return result;
  };

  const fillArray = (matrix, inputArray, replaceFunction, replacement, subArray = null) =>
    matrix.map((lineForNumber, index1) =>
      Array.from(lineForNumber).map((placeForNumber, index2) =>
        replaceFunction(placeForNumber, replacement, subArray, index1, index2)
      )
    );

  const replacementItem = (item, replacement) => (item = replacement);
  const fillItem = (item, replacement, subArray, index1, index2) =>
    typeof subArray[index1][index2] !== 'undefined'
      ? replacementItem(item, subArray[index1][index2])
      : replacement;

  const reverseString = (item) => item.split('').reverse().join('');

  const matrixForLine = Array.from(createArrayForLine(maxNumber, maxNumber))
    .reverse()
    .map((l) => (l += separator));
  const emptyLine = fillArray(matrixForLine, null, replacementItem, separator);

  const createSquare = () => {
    const square = [];
    for (let i = 0; i < maxNumber; i++) {
      const currentLine = Array.from(createArrayForLine(maxNumber, i + 1))
        .reverse()
        .map((i) => reverseString(i));
      square.push(
        Object.values(
          fillArray(emptyLine, currentLine, fillItem, separator, currentLine).map((l) => l.join(''))
        )
          .join('')
          .split('')
          .reverse()
      );
    }
    return square;
  };

  const addLabelForLine = (inputArray, firstLine = false) => {
    const lineWithLabel = [];
    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] !== separator && inputArray[i + 1] === separator) {
        if (!firstLine) lineWithLabel.push(inputArray[i]);
        break;
      }
      lineWithLabel.push(inputArray[i]);
    }
    return firstLine
      ? lineWithLabel.concat(inputArray).join('')
      : lineWithLabel.concat(inputArray).slice(1).join('');
  };

  const createTable = (inputArray) => {
    const table = [];
    table.push(addLabelForLine(inputArray[0], true));
    inputArray.map((lineOfTable) => table.push(addLabelForLine(lineOfTable)));
    return table.join('\n');
  };

  const squareArray = createSquare();
  const table = createTable(squareArray);
  return console.log(table);
};

multiply(10);  // Вывод в консоль результата.
