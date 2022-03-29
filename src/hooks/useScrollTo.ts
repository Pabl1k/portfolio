export const useScrollTo = (y: number) => {
  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};
