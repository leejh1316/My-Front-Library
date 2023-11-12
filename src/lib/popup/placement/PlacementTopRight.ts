import { Placement } from "../types/index";
import { Coordinate } from "../types/placement";
import { PlacementStrategy } from "./PlacementStrategy";
export class PlacementTopRight extends PlacementStrategy {
  getPlacementName(): Placement {
    return "top-right";
  }
  getCoordinate(): Coordinate {
    return {
      top:
        this.referenceRect.top +
        scrollY -
        this.popupRect.height -
        this.options.gap,
      left: this.referenceRect.right + scrollX - this.popupRect.width,
    };
  }
}
