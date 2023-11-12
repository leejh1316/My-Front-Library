import { Placement } from "../types/index";
import { Coordinate } from "../types/placement";
import { PlacementStrategy } from "./PlacementStrategy";
export class PlacementLeftBottom extends PlacementStrategy {
  getPlacementName(): Placement {
    return "left-bottom";
  }
  getCoordinate(): Coordinate {
    return {
      top: this.referenceRect.bottom + scrollY - this.popupRect.height,
      left:
        this.referenceRect.left +
        scrollX -
        this.popupRect.width -
        this.options.gap,
    };
  }
}
