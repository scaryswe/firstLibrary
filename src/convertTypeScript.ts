// Challenge 1: capitalize() - makes the first character of a given string uppercase.
function capitalize(str: string): string {
    if (typeof str !== 'string' || str.length === 0) return '';
    return str[0].toUpperCase() + str.slice(1);
  }
  
  // Challenge 2: allCaps() - makes all characters uppercase.
  function allCaps(str: string): string {
    return str.toUpperCase();
  }
  
  // Challenge 3: capitalizeWords() - makes the first character of each word uppercase.
  function capitalizeWords(str: string): string {
    return str
      .split(' ')
      .map((word) => capitalize(word))
      .join(' ');
  }
  
  // Challenge 4: removeExtraSpaces() - Removes all spaces from the beginning and end of a String along with any extra spaces in the middle.
  function removeExtraSpaces(str: string): string {
    return str.trim().split(/\s+/).join(' ');
  }
  
  // Stretch: capitalizeHeadline() - Capitalize all of the words in a string that are not articles, prepositions, or conjunctions.
  function capitalizeHeadline(str: string): string {
    const exceptions: string[] = [
      'the',
      'in',
      'a',
      'an',
      'and',
      'but',
      'for',
      'at',
      'by',
      'from',
    ];
    return str
      .split(' ')
      .map((word, index) => {
        if (index === 0 || !exceptions.includes(word)) {
          return capitalize(word);
        }
        return word;
      })
      .join(' ');
  }
  
  // Challenge 5: kebobCase() - Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase.
  function kebobCase(str: string): string {
    str = str
      .toLowerCase()
      .split('')
      .filter((char) => {
        const code = char.charCodeAt(0);
        return (
          (code >= 97 && code <= 122)
          || (code >= 48 && code <= 57)
          || code === 32
          || code === 45
        );
      })
      .join('');
  
    return removeExtraSpaces(str).split(' ').join('-');
  }
  
  // Challenge 6: snakeCase() - Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase.
  function snakeCase(str: string): string {
    return kebobCase(str).replace(/-/g, '_');
  }
  
  // Challenge 7: camelCase() - Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces.
  function camelCase(str: string): string {
    const words = str.split(' ');
    return (
      words[0].toLowerCase()
      + words
        .slice(1)
        .map((word) => capitalize(word))
        .join('')
    );
  }
  
  // Challenge 8: shift() - Takes the first character of a string and moves to the end of a string.
  function shift(str: string, n: number = 1): string {
    return str.slice(n) + str.slice(0, n);
  }
  
  // Challenge 9: makeHashTag() - Capitalizes all words and adds a hashtag to the beginning.
  function makeHashTag(str: string): string[] {
    const words = str
      .split(' ')
      .sort((a, b) => b.length - a.length)
      .slice(0, 3);
    return words.map((word) => `#${word.toLowerCase()}`);
  }
  
  // Challenge 10: isEmpty() - Returns true if the given string is empty or contains only whitespace.
  function isEmpty(str: string): boolean {
    return str.trim() === '';
  }
  
  // Exports
  export {
    capitalize,
    allCaps,
    capitalizeWords,
    removeExtraSpaces,
    capitalizeHeadline,
    kebobCase,
    snakeCase,
    camelCase,
    shift,
    makeHashTag,
    isEmpty,
  };