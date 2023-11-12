import { Placement } from "../types/index";
import { Coordinate } from "../types/placement";
import { PlacementStrategy } from "./PlacementStrategy";

export class PlacementTop extends PlacementStrategy {
  getPlacementName(): Placement {
    return "top";
  }
  getCoordinate(): Coordinate {
    return {
      top:
        this.referenceRect.top +
        scrollY -
        this.popupRect.height -
        this.options.gap,
      left:
        this.referenceRect.width / 2 +
        (this.referenceRect.left + scrollX) -
        this.popupRect.width / 2,
    };
  }
}
