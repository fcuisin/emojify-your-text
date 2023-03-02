import emojilib from "emojilib";

const SYMBOLS = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

const convertWordToEmoji = (word: string) => {
  if (!word || word === "") return "";

  const wordToEmojify = word.toLowerCase();

  const appropriateEmojis: string[] = [];

  if (wordToEmojify === "she") {
    appropriateEmojis.push("💁");
  } else if (wordToEmojify === "he") {
    appropriateEmojis.push("💁‍♂️");
  } else if (wordToEmojify === "we" || word === "they") {
    appropriateEmojis.push("👩‍👩‍👦‍👦");
  } else if (wordToEmojify === "i" || word === "you") {
    appropriateEmojis.push("😀");
  } else if (wordToEmojify === "am" || word === "is" || word === "are") {
    appropriateEmojis.push("👉");
  }

  const emojilist: { [emoji: string]: string[] } = emojilib;
  for (const emoji in emojilist) {
    if (emojilist[emoji].some((keyword: string) => wordToEmojify === keyword)) {
      appropriateEmojis.push(emoji);
    }
  }
  return (
    appropriateEmojis[Math.floor(Math.random() * appropriateEmojis.length)] ??
    word
  );
};

export const translateText = (sentence: string): string => {
  let translation = "";
  const words = sentence.split(" ");
  for (let word of words) {
    let foundSymbolInWord = "";
    while (SYMBOLS.indexOf(word[word.length - 1]) !== -1) {
      foundSymbolInWord += word[word.length - 1];
      word = word.slice(0, word.length - 1);
    }
    const translated = convertWordToEmoji(word);
    if (translated) {
      translation += translated + foundSymbolInWord + " ";
      continue;
    }
    translation += foundSymbolInWord;
  }
  return translation;
};
