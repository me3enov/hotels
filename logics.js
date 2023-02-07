/** ЗАДАНИЯ НА СООБРАЗИТЕЛЬНОСТЬ. */

/** 1. Ответ: 70 человек всегда говорят правду. */

/** 2. Один из вариантов ответа, подобранный путем разложения на простые множители:
 * 7 10 4
 * 5 11 6
 * 8  3 9
 * */

/** 3. Худший сценарий это вес предмета 2499 и 5000 - тогда понадобиться 2500 броска
 * Подрробнее об алгоритмах поиска в решении.
 * Если коротко то это бинарный поиск пока первый предмет целый и линейный для второго, когда уже разбит первый.
 *  */

/** 4. Всего в столовой 60 пирожков. */

/** РЕШЕНИЕ ЧЕРЕЗ КОД. */
console.log('***ЗАДАНИЯ НА СООБРАЗИТЕЛЬНОСТЬ.***');
/** 1. Сколько человек всегда говорят правду?
 * Улучшено!
 * Можно задать колличество вопросов/утвердительных ответов, редактируя isAnswersForWhoSpeaksTheTruth
 */

const whoSpeaksTheTruth = (users, answers) => {
  let allYesAnswers = 0;
  const dishonestRatio = answers.length - 1;
  answers.map((answer) => (allYesAnswers += answer));
  const extraAnswers = allYesAnswers - users,
    dishonestAnswers = extraAnswers * dishonestRatio,
    honest = allYesAnswers - dishonestAnswers;
  return honest;
};

const isUsersForWhoSpeaksTheTruth = 90; // Общее колличество человек из 2-х категорий.
const isAnswersForWhoSpeaksTheTruth = [45, 35, 30]; // Утвердительные ответы.
const isHonest = whoSpeaksTheTruth(isUsersForWhoSpeaksTheTruth, isAnswersForWhoSpeaksTheTruth);
// isHonest - колличество людей говорящих правду.
console.log({ Truth: isHonest }); // Вывод в консоль результата.

/** 2. Кквадрат произведений 3 х 3.
 * Не успел полностью написать для него оптимальный алгоритм поиска и вывода всех возможных вариантов:(
 * В самом конце файла есть незавершенный и не оптимизированный код с решением этой задачи.
 */
const arrayForSquare = [3, 4, 5, 6, 7, 8, 9, 10, 11];
printSquare(); // Вывод в консоль рандомный квадрат соответствующий заданию.

/** 3. Найти высоту, начиная с которой предметы разрушаются.
 * Улучшено!
 * Можно задать колличество запускаемых предметов (попыток), редактируя isItemsForTry.
 */
const whatHeight = (weight, range, items) => {
  if (
    weight > range.length ||
    weight < 0 ||
    typeof weight !== 'number' ||
    items < 1 ||
    range.length < 1 ||
    typeof items !== 'number'
  )
    return 'wrong data';

  let start = 1,
    end = range.length,
    middle = Math.floor((start + end) / 2),
    found = false,
    step = 0;

  while (items > 1 && found === false && start <= end) {
    items--;
    step++;
    middle = Math.floor((start + end) / 2);
    if (range[middle] - 1 === weight) {
      return { Height: range[middle] - 1, Steps: step };
    } else if (range[middle] - 1 > weight) {
      if ((start = 1)) start--;
      end = --middle;
    } else {
      start = ++middle;
    }
  }

  for (let i = start; i < end; i++) {
    step++;
    if (range[i] === weight) {
      return { Height: range[i], Steps: step };
    }
  }
};

// Создаем массив с интервалом высот
const isHeightRange = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};
const isWeight = 2499; // Вес материала
const isItemsForTry = 2; // Колличество предметов для эксперемента
const isRange = isHeightRange(1, 5000); // Интервал высот
const isHeight = whatHeight(isWeight, isRange, isItemsForTry);
// isHeight - точная высота, начиная с которой предметы разрушаются
console.log(isHeight); // Вывод в консоль результата.

/** 4. Сколько пирожков есть в столовой?
 * Улучшено!
 * Можно задать колличество людей, редактируя isUsersForPies
 */
const howManyPies = (users) => {
  const NOK = (params) => {
    let a = Math.abs(params[0]);
    params.map((item, index) => {
      let b = Math.abs(params[index]),
        c = a;
      while (a && b) {
        a > b ? (a %= b) : (b %= a);
      }
      a = Math.abs(c * params[index]) / (a + b);
    });
    return a;
  };

  const dividers = [],
    extra = [];
  for (let user in users) {
    dividers.push(users[user].divider);
    extra.push(users[user].extra);
  }

  let ResultOfNOK = NOK(dividers);

  const check = (NOK, users) => {
    let allPies = 0;
    for (let user in users) {
      allPies += NOK / users[user].divider + users[user].extra;
    }
    return allPies === NOK;
  };

  if (check(ResultOfNOK, users) === true) return ResultOfNOK;
  return 'wrong data';
};

// Создаем объект со студентами и их запросами на пирожки
const isUsersForPies = {
  a: {
    divider: 3, // Треть от всех пирожков
    extra: 2 // И еще 2 пирожка
  },
  b: {
    divider: 4, // Четверть от всех пирожков
    extra: 3 // И еще 3 пирожка
  },
  c: {
    divider: 5, // Пятая часть всех пирожков
    extra: 8 //И еще 8 пирожков
  }
};

const isPies = howManyPies(isUsersForPies);
// isPies - сколько всего пирожков в столовой, если желания студентов = колличество пирожков.
console.log({ Pies: isPies }); // Вывод в консоль результата.

/** 2. Кквадрат произведений 3 х 3.
 * Решение.
 * Уже выводит квадрат, но ужно дописать и оптимизировать.
 */
function findSquare (inputArray, random = false){
  const isAllSimple = [];
  const isUniquePrimeItems = [];
  const isOtherItems = [];
  const isAllSquare = [];
  const error = () => 'This is impossible!';
  const getUnique = (array) => array.filter((item, index) => index === array.indexOf(item));
  const getRandomInt = (max) => Math.floor(Math.random() * max);

  const wordsInColumn = (text) => {
    let words = text.split(' ');
    let maxLength = Math.max.apply(null, words.map(w => w.length));
    return words.map(w => ' '.repeat(maxLength - w.length) + w).join('\n');
  }

  const isPrime = (number) => {
    let squareRoot = Math.floor(Math.sqrt(number));
    let prime = number != 1;
    for (let i = 2; i < squareRoot + 1; i++) {
      if (number % i == 0) {
        prime = false;
        break;
      }
    }
    return prime;
  };

  const multipliers = (inputNumber) => {
    const sequence = [];
    const fillArray = (numberForFill, start = 2) => {
      let number = numberForFill;
      for (let i = start; i < inputNumber; i++) {
        if (inputNumber % i === 0 && isPrime(i)) {
          sequence.push(i);
          number = number / i;
          if (number % i === 0 && isPrime(i)) {
            fillArray(number, i);
          }
        }
      }
    };
    fillArray(inputNumber);
    return sequence.length > 1 ? sequence : [inputNumber];
  };

  const createAllVariables = (inputArray) => {
    const result = [];
    permuteArray(inputArray).map((array) => {
      result.push(createChunks(array, 2));
    });
    return result;
  }

  const permuteArray = (inputArray) => {
    const result = [];
    const permute = (array, m = []) => {
      if (array.length === 0) {
        result.push(m);
      } else {
        for (let i = 0; i < array.length; i++) {
          let curr = array.slice();
          let next = curr.splice(i, 1);
          permute(curr.slice(), m.concat(next));
        }
      }
    };
    permute(inputArray);

    return result;
  };

  const createChunks = (inputArray, divider) => {
    return inputArray.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / divider);
      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }
      resultArray[chunkIndex].push(item);
      return resultArray;
    }, []);
  };

  inputArray.map((number) => {
    const simple = multipliers(number);
    isAllSimple.push(simple);
  });

  const duplicates = getUnique(
    isAllSimple.flat().filter((item, index, items) => items.indexOf(item) !== index)
  );
  const flatArray = isAllSimple.flat();

  const createUniqueArray = (inputArray, duplicatedArray, outArray) => {
    inputArray.map((item) => {
      if (!duplicatedArray.includes(item)) outArray.push(item);
    });
  };

  const fillRemainders = (inputArray, index, plus, outArray) => {
    let indexForRemainders = index;
    inputArray.map((item) => {
      outArray[indexForRemainders] = item;
      indexForRemainders += plus;
    });

    return outArray;
  }

  createUniqueArray(flatArray, duplicates, isUniquePrimeItems);
  createUniqueArray(inputArray, isUniquePrimeItems, isOtherItems);

  const isAllVariables = createAllVariables(isOtherItems);

  if (isUniquePrimeItems.length > 3) return error();

  const arrangeItems = (allVariables) => {
    for (let i = 0; i < allVariables.length; i++) {
      let remainder;
      const [chunk0, chunk1, chunk2, ...other] = allVariables[i];
      const matrix = ["*", "*", "*", "*", "*", "*", "*", "*", "*"];
      const [b, d] = chunk0,
        [c, g] = chunk1,
        [f, h] = chunk2;

      if (((b / d) === (f / h))) {
        matrix[1] = b; matrix[3] = d;
        matrix[5] = f; matrix[7] = h;
        if (((g / c) === (f / h))
        && isUniquePrimeItems.length > 0) {
          remainder = other.flat();
          matrix[2] = c; matrix[6] = g;
        } else {
          remainder =  chunk1.concat(other).flat();
        }

        const checkMatrix = () =>
          matrix[0] * matrix[1] * matrix[2] === matrix[0] * matrix[3] * matrix[6] &&
          matrix[3] * matrix[4] * matrix[5] === matrix[1] * matrix[4] * matrix[7] &&
          matrix[6] * matrix[7] * matrix[8] === matrix[2] * matrix[5] * matrix[8] ?
          true : false;

        const isMagic = (remainder) => {
          let index  = 0;
          let plus  = 4;
          if (isUniquePrimeItems.length > 0) {
            fillRemainders(isUniquePrimeItems, index, plus, matrix);
            index = isUniquePrimeItems.length * 4;
          }
          if (remainder.length > 1) index = 0; plus = 2;
          fillRemainders(remainder, index, plus, matrix);

          return checkMatrix();
        }

        isMagic(remainder) ? isAllSquare.push(matrix) : null;
      }
      // Нужна фильтрация исходного массива чтобы отсеить всё лишнее.
      // Нужно доделать рекурсией, чтобы уменьшить колличество проходов
      // const filteredVariable = isAllVariables.slice(0).filter( variable => variable[0].toString() !== chunk0.toString());
    }
  };

  arrangeItems(isAllVariables);

  const addInvertedItems = () => {
    const invertedResult = [];
    const invertedUnique = permuteArray(isUniquePrimeItems).filter( item =>
      item.toString() !== isUniquePrimeItems.toString());
    invertedUnique.map(variable => isAllSquare.map(item => {
      invertedResult.push(fillRemainders(variable, 0, 4, item.slice(0)))
    }))

    return isAllSquare.concat(invertedResult);
  }

  const printMatrix = (inputArray) => {
    inputArray.map(matrix => {
      const [a, b, c, d, e, f, g, h, i] = matrix;
      const makeSpaces = (item) => wordsInColumn(item.join(' ')).split('\n');
      const column1 = makeSpaces([a, d, g]);
      const column2 = makeSpaces([b, e, h]);
      const column3 = makeSpaces([c, f, i]);

      console.log([
        [column1[0], column2[0], column3[0]].join(' '),
        [column1[1], column2[1], column3[1]].join(' '),
        [column1[2], column2[2], column3[2]].join(' ')
      ].join('\n'))
    })
  }

  const allFound =  isUniquePrimeItems.length > 0 ? addInvertedItems() : isAllSquare;
  const randomMatrix = [allFound[getRandomInt(isAllSquare.length)]];
  random === true ?  printMatrix(randomMatrix) : printMatrix(allFound);
};

//const arrayForSquare = [3, 4, 5, 6, 7, 8, 9, 10, 11];
//const arrayForSquare = [100, 25, 4, 20, 10, 40, 5, 32, 12]; // плохой сценарий.

//const randomSquare = findSquare(arrayForSquare, true);
//const allSquares = findSquare(arrayForSquare, false);

function printSquare(){
  findSquare(arrayForSquare, true)
}