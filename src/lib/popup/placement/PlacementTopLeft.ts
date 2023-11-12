import { Placement } from "../types/index";
import { Coordinate } from "../types/placement";
import { PlacementStrategy } from "./PlacementStrategy";
export class PlacementTopLeft extends PlacementStrategy {
  getPlacementName(): Placement {
    return "top-left";
  }
  getCoordinate(): Coordinate {
    return {
      top:
        this.referenceRect.top +
        scrollY -
        this.popupRect.height -
        this.options.gap,
      left: this.referenceRect.left + scrollX,
    };
  }
}
