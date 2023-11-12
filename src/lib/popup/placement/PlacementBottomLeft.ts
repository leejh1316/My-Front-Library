import { Placement } from "../types/index";
import { Coordinate } from "../types/placement";
import { PlacementStrategy } from "./PlacementStrategy";
export class PlacementBottomLeft extends PlacementStrategy {
  getPlacementName(): Placement {
    return "bottom-left";
  }
  getCoordinate(): Coordinate {
    return {
      top: this.referenceRect.bottom + this.options.gap + scrollY,
      left: this.referenceRect.left + scrollX,
    };
  }
}
