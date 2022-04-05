export const useMobileScreen = (): boolean => {
  const { matches } = window.matchMedia("(max-width: 600px)");
  return matches;
};

export const useTabletScreen = (): boolean => {
  const { matches } = window.matchMedia("(max-width: 820px)");
  return matches;
};
