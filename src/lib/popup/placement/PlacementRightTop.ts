import { Placement } from "../types/index";
import { Coordinate } from "../types/placement";
import { PlacementStrategy } from "./PlacementStrategy";
export class PlacementRightTop extends PlacementStrategy {
  getPlacementName(): Placement {
    return "right-top";
  }
  getCoordinate(): Coordinate {
    return {
      top: this.referenceRect.top + scrollY,
      left: this.referenceRect.right + this.options.gap + scrollX,
    };
  }
}
