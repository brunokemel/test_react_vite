export const breakPoints = {
  mobile: "320px",
  tablet: "768px",
  desktop: "1024px",
  largeDesktop: "1440px",
} as const;

export type BreakPoints = typeof breakPoints;
