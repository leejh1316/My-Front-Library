import { Placement } from "../types/index";
import { Coordinate } from "../types/placement";
import { PlacementStrategy } from "./PlacementStrategy";
export class PlacementRightBottom extends PlacementStrategy {
  getPlacementName(): Placement {
    return "right-bottom";
  }
  getCoordinate(): Coordinate {
    return {
      top: this.referenceRect.bottom + scrollY - this.popupRect.height,
      left: this.referenceRect.right + this.options.gap + scrollX,
    };
  }
}

/*

뷰포트를 벗어남을 감지하는 방법
scrollY ~ scrolly+innerHeight 의 사이에 있으면 뷰포트 내부에 있는거임
 */
