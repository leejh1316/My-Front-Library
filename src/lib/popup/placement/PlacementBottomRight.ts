import { Placement } from "../types/index";
import { Coordinate } from "../types/placement";
import { PlacementStrategy } from "./PlacementStrategy";
export class PlacementBottomRight extends PlacementStrategy {
  getPlacementName(): Placement {
    return "bottom-right";
  }
  getCoordinate(): Coordinate {
    return {
      top: this.referenceRect.bottom + this.options.gap + scrollY,
      left: this.referenceRect.right + scrollX - this.popupRect.width,
    };
  }
}
