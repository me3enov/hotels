/** ЗАДАНИЯ НА СООБРАЗИТЕЛЬНОСТЬ. */

/** 1. Ответ: 70 человек всегда говорят правду. */

/** 2. Один из вариантов ответа:
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
console.log('***ЗАДАНИЯ НА СООБРАЗИТЕЛЬНОСТЬ.***')
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

/** 2. Магический квадрат 3 х 3.
 * Не успел написать для него оптимальный алгоритм поиска и вывода всех возможных вариантов:(
 * Поэтому просто вывожу один из вариантов подобранный путем разложения на простые множители.
 */
const printMagicSquare = () => {
  console.log('7 10 4\n5 11 6\n8  3 9')
};
printMagicSquare(); // Вывод в консоль результата.

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
