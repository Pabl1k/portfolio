export const useScrollTo = (ref: HTMLDivElement): void => {
  window.scrollTo({
    top: ref.offsetTop - 20, // additional indent from top
    left: 0,
    behavior: "smooth",
  });
};
