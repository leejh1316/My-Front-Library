import {
  PlacementBottom,
  PlacementBottomLeft,
  PlacementLeft,
  PlacementStrategy,
} from "./placement";
import { Options, Placement } from "./types";

const placementFactory: Record<Placement, PlacementStrategy> = {
  bottom: new PlacementBottom(),
  "bottom-left": new PlacementBottomLeft(),
  "bottom-right": new PlacementBottomLeft(),
  left: new PlacementLeft(),
};
// class Popupp {
//   private popupElement: HTMLDivElement | null = null;
//   private targetElement: HTMLElement | null = null; // 팝업을 보여주는 대상 엘리먼트를 저장
//   private currentPosition: Position | null = null; // 현재 위치 정보를 저장

//   constructor() {
//     window.addEventListener("resize", this.handleWindowResize.bind(this));
//   }
//   // 특정 엘리먼트의 절대좌표를 구하는 함수
//   private getAbsolutePosition(element: HTMLElement): Coordinates {
//     const rect = element.getBoundingClientRect();
//     const absoluteTop = window.scrollY + rect.top;
//     const absoluteLeft = window.scrollX + rect.left;
//     console.log({
//       top: absoluteTop,
//       left: absoluteLeft,
//       width: rect.width,
//       height: rect.height,
//     });
//     return {
//       top: absoluteTop,
//       left: absoluteLeft,
//       width: rect.width,
//       height: rect.height,
//     };
//   }

//   // popup element에 계산된 좌표값을 설정하는 함수
//   private setPosition(element: HTMLElement, position: Position): void {
//     if (!this.popupElement) return;

//     const coords = this.getAbsolutePosition(element);
//     let top = 0;
//     let left = 0;

//     const popupWidth = this.popupElement.offsetWidth;
//     const popupHeight = this.popupElement.offsetHeight;

//     switch (position) {
//       case "top":
//         top = coords.top - popupHeight;
//         left = coords.left + coords.width / 2 - popupWidth / 2;
//         break;
//       case "top-left":
//         top = coords.top - popupHeight;
//         left = coords.left;
//         break;
//       case "top-right":
//         top = coords.top - popupHeight;
//         left = coords.left + coords.width - popupWidth;
//         break;
//       case "right":
//         top = coords.top + coords.height / 2 - popupHeight / 2;
//         left = coords.left + coords.width;
//         break;
//       case "right-top":
//         top = coords.top;
//         left = coords.left + coords.width;
//         break;
//       case "right-bottom":
//         top = coords.top + coords.height - popupHeight;
//         left = coords.left + coords.width;
//         break;
//       case "bottom":
//         top = coords.top + coords.height;
//         left = coords.left + coords.width / 2 - popupWidth / 2;
//         break;
//       case "bottom-left":
//         top = coords.top + coords.height;
//         left = coords.left;
//         break;
//       case "bottom-right":
//         top = coords.top + coords.height;
//         left = coords.left + coords.width - popupWidth;
//         break;
//       case "left":
//         top = coords.top + coords.height / 2 - popupHeight / 2;
//         left = coords.left - popupWidth;
//         break;
//       case "left-top":
//         top = coords.top;
//         left = coords.left - popupWidth;
//         break;
//       case "left-bottom":
//         top = coords.top + coords.height - popupHeight;
//         left = coords.left - popupWidth;
//         break;
//       default:
//         console.error("Invalid position value");
//         return;
//     }
//     this.popupElement.style.top = `${top}px`;
//     this.popupElement.style.left = `${left}px`;
//   }

//   // popup element를 띄우는 함수
//   public show(element: HTMLElement, position: Position): void {
//     if (!this.popupElement) {
//       this.popupElement = document.createElement("div");
//       this.popupElement.style.width = "100px";
//       this.popupElement.style.height = "100px";
//       this.popupElement.style.position = "absolute";
//       this.popupElement.style.backgroundColor = "blue";
//       this.popupElement.classList.add("popup");
//       document.querySelector("#app")?.appendChild(this.popupElement);
//     }
//     this.targetElement = element; // 대상 엘리먼트 저장
//     this.currentPosition = position; // 위치 정보 저장
//     this.setPosition(element, position);
//     this.popupElement.style.display = "block";
//   }
//   // popup element를 숨기는 함수
//   public hide(): void {
//     if (this.popupElement) {
//       this.popupElement.style.display = "none";
//     }
//   }
//   private handleWindowResize(): void {
//     if (this.targetElement && this.currentPosition) {
//       this.setPosition(this.targetElement, this.currentPosition);
//     }
//   }
// }
