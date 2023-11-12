export interface Options {
  placement?: Placement;
  gap?: number;
  mode?: Mode;
  event?: Event;
}
export type Placement =
  | "top"
  | "top-right"
  | "top-left"
  | "right"
  | "right-top"
  | "right-bottom"
  | "bottom"
  | "bottom-right"
  | "bottom-left"
  | "left"
  | "left-top"
  | "left-bottom";

interface Event {
  resize?: boolean;
  scroll?: boolean;
}

interface Mode {
  hide?: boolean;
  auto?: boolean;
  push?: boolean;
}
// export interface Modifiers {
//   offset: Offset
// }
