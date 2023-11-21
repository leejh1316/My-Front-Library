export interface SlideOption {
  grabMode: GrabMode;
  direction: Direction;
  pagination: Pagination;
  gap: number;
}
export interface Pagination {
  customElement?: Element;
  clickToMove: boolean;
}
export type GrabMode = "free" | "center";
export type Direction = "horizontal" | "vertical";
