import {
  PlacementBottom,
  PlacementBottomLeft,
  PlacementBottomRight,
  PlacementLeft,
  PlacementLeftBottom,
  PlacementLeftTop,
  PlacementRight,
  PlacementRightBottom,
  PlacementRightTop,
  PlacementTop,
  PlacementTopLeft,
  PlacementTopRight,
  PlacementStrategy,
} from "./index";
import { Options, Placement } from "../types/index";

// export const usePlacement = (
//   placement: Placement,
//   referenceRect: DOMRect,
//   popupRect: DOMRect,
//   options: Options
// ): PlacementStrategy => {
//   const placementFactory: Record<Placement, PlacementStrategy> = {
//     bottom: new PlacementBottom(referenceRect, popupRect, options),
//     "bottom-left": new PlacementBottomLeft(referenceRect, popupRect, options),
//     "bottom-right": new PlacementBottomRight(referenceRect, popupRect, options),
//     left: new PlacementLeft(referenceRect, popupRect, options),
//     "left-bottom": new PlacementLeftBottom(referenceRect, popupRect, options),
//     "left-top": new PlacementLeftTop(referenceRect, popupRect, options),
//     right: new PlacementRight(referenceRect, popupRect, options),
//     "right-bottom": new PlacementRightBottom(referenceRect, popupRect, options),
//     "right-top": new PlacementRightTop(referenceRect, popupRect, options),
//     top: new PlacementTop(referenceRect, popupRect, options),
//     "top-left": new PlacementTopLeft(referenceRect, popupRect, options),
//     "top-right": new PlacementTopRight(referenceRect, popupRect, options),
//   };
//   return placementFactory[placement];
// };

export const usePlacement = (
  placement: Placement,
  referenceRect: DOMRect,
  popupRect: DOMRect,
  options: Options
): PlacementStrategy => {
  switch (placement) {
    case "bottom":
      return new PlacementBottom(referenceRect, popupRect, options);
    case "bottom-left":
      return new PlacementBottomLeft(referenceRect, popupRect, options);
    case "bottom-right":
      return new PlacementBottomRight(referenceRect, popupRect, options);
    case "left":
      return new PlacementLeft(referenceRect, popupRect, options);
    case "left-bottom":
      return new PlacementLeftBottom(referenceRect, popupRect, options);
    case "left-top":
      return new PlacementLeftTop(referenceRect, popupRect, options);
    case "right":
      return new PlacementRight(referenceRect, popupRect, options);
    case "right-bottom":
      return new PlacementRightBottom(referenceRect, popupRect, options);
    case "right-top":
      return new PlacementRightTop(referenceRect, popupRect, options);
    case "top":
      return new PlacementTop(referenceRect, popupRect, options);
    case "top-left":
      return new PlacementTopLeft(referenceRect, popupRect, options);
    case "top-right":
      return new PlacementTopRight(referenceRect, popupRect, options);
    default:
      throw new Error(`Unsupported placement: ${placement}`);
  }
};
