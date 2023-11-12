import { Placement } from "../types/index";
import { Coordinate } from "../types/placement";
import { PlacementStrategy } from "./PlacementStrategy";
export class PlacementBottom extends PlacementStrategy {
  getPlacementName(): Placement {
    return "bottom";
  }
  getCoordinate(): Coordinate {
    return {
      top: this.referenceRect.bottom + this.options.gap + scrollY,
      left:
        this.referenceRect.width / 2 +
        (this.referenceRect.left + scrollX) -
        this.popupRect.width / 2,
    };
}
  // getOverflowPreventCoordinate(coordPopup: Coordinate): Coordinate {
  //   const areaTop =
  //     this.referenceRect.top +
  //     this.pageY -
  //     this.options.gap -
  //     this.popupRect.height;
  //   const areaBottom =
  //     this.referenceRect.bottom + this.pageY + this.options.gap;
  //   console.log(areaTop, areaBottom);
  //   const coord: Coordinate = { ...coordPopup };
  //   console.log(coord);
  //   console.log(-scrollY)
  //   //범위
  //   // 레퍼 요소 top - gap - popup.height (위 방향 최대)
  //   // 레퍼 요소 bottom + gap (아래 방향 최대)
  //   //이 범위 popup의 top 값으로 지정
  //   //1100

  //   if (coord.top >= areaTop && coord.top <= areaBottom) {
  //     console.log("실행");
  //     let top = 0
  //     if(coord.top-scrollY>=areaTop){top = areaTop}
  //     else if(coord.top-scrollY<=areaBottom){top = areaBottom}
  //     else {top = coord.top - scrollY}
  //     return {
  //       top: top,
  //       left: coord.left,
  //     };
  //   }
  //   return coordPopup;
  // }
}
/*
left :  너비의 반 + 레프트된 길이 로 참조요소의 가운데 좌표 를 구함 그리고
팝업 요소의 길이의 절반을 빼면서 가운데 정렬이 되도록 함
*/
