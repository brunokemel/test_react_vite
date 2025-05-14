export type CardType = {
  title: string;
  date: number;
  imgUrl: string;
};
export type CardProps = {
  card: CardType;
  onClick: (card: CardType) => void;
};
