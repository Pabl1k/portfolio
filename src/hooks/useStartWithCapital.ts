export const useStartWithCapital = (word: string) => {
  return `${word[0].toUpperCase()}${word.slice(1)}`;
};
