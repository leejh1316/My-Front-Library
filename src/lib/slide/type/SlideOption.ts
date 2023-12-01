export interface SlideOption {
  sliderType: SliderType;
  direction: Direction;
  pagination: Pagination;
  gap: number;
}
export interface Pagination {
  customElement?: Element;
  clickToMove: boolean;
}
export type SliderType = "free" | "center" | 'left' | 'default';
export type Direction = "horizontal" | "vertical";
