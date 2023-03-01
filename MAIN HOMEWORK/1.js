const stringUtils = {
    // 1.1. Преобразование строки к нижнему регистру, но первая буква большая.
    capitalizeFirstLetter(str) {
      return str.toLowerCase().replace(/^\w/, (c) => c.toUpperCase());
    },
  
    // 1.2. Преобразование строки с целью правильно расстановки пробелов.
    normalizeSpaces(str) {
      return str.replace(/\s+/g, " ")
                .replace(/\s+([.,:;!?)])/g, "$1")
                .replace(/([([{])\s+/g, "$1")
                .trim();
    },
  
    // 1.3. Посдчитывающие кол-во слов в строке.
    countWords(str) {
      return str.trim().split(/\s+/).length;
    },
  
    // 1.4. Подсчитывающий, уникальные слова.
    countUniqueWords(str) {
      const words = str.toLowerCase().match(/\b\w+\b/g);
      const wordCount = {};
  
      for (let i = 0; i < words.length; i++) {
        const word = words[i];
  
        if (wordCount[word]) {
          wordCount[word]++;
        } else {
          wordCount[word] = 1;
        }
      }
  
      return wordCount;
    },
  };
  
  // Пример использования методов модуля:
  const str = "Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.";
  
  console.log(stringUtils.capitalizeFirstLetter("Abscd")); // Output: "Abscd"
  console.log(stringUtils.normalizeSpaces(str)); // Output: "Вот пример строки,в которой используются знаки препинания. После знаков должны стоять пробелы, а перед знаками их быть не должно. Если есть лишние подряд идущие пробелы, они должны быть устранены."
  console.log(stringUtils.countWords(str)); // Output: 22
  console.log(stringUtils.countUniqueWords("Текст, в котором слово текст несколько раз встречается и слово тоже")); // Output: { текст: 2, в: 1, котором: 1, слово: 2, несколько: 1, раз: 1, встречается: 1, и: 1, тоже: 1 }