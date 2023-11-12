import { Placement } from "../types/index";
import { Coordinate } from "../types/placement";
import { PlacementStrategy } from "./PlacementStrategy";
export class PlacementRight extends PlacementStrategy {
  getPlacementName(): Placement {
    return "right";
  }
  getCoordinate(): Coordinate {
    return {
      top:
        this.referenceRect.height / 2 +
        (this.referenceRect.top + scrollY) -
        this.popupRect.height / 2,
      left: this.referenceRect.right + this.options.gap + scrollX,
    };
  }
}
