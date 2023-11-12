  import { Placement } from "../types/index";
import { Coordinate } from "../types/placement";
import { PlacementStrategy } from "./PlacementStrategy";
export class PlacementLeft extends PlacementStrategy {
  getPlacementName(): Placement {
    return "left";
  }
  getCoordinate(): Coordinate {
    return {
      top:
        this.referenceRect.height / 2 +
        (this.referenceRect.top + scrollY) -
        this.popupRect.height / 2,
      left:
        this.referenceRect.left +
        scrollX -
        this.popupRect.width -
        this.options.gap,
    };
  }
}
