import { Placement } from "../types/index";
import { Coordinate } from "../types/placement";
import { PlacementStrategy } from "./PlacementStrategy";
export class PlacementLeftTop extends PlacementStrategy {
  getPlacementName(): Placement {
    return "left-top";
  }
  getCoordinate(): Coordinate {
    return {
      top: this.referenceRect.top + scrollY,
      left:
        this.referenceRect.left +
        scrollX -
        this.popupRect.width -
        this.options.gap,
    };
  }
}
