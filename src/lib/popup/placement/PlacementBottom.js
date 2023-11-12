var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { PlacementStrategy } from "./PlacementStrategy";
var PlacementBottom = /** @class */ (function (_super) {
    __extends(PlacementBottom, _super);
    function PlacementBottom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlacementBottom.prototype.getPlacementName = function () {
        return "bottom";
    };
    PlacementBottom.prototype.getCoordinate = function () {
        return {
            top: this.referenceRect.bottom + this.options.gap + scrollY,
            left: this.referenceRect.width / 2 +
                (this.referenceRect.left + scrollX) -
                this.popupRect.width / 2,
        };
    };
    return PlacementBottom;
}(PlacementStrategy));
export { PlacementBottom };
/*
left :  너비의 반 + 레프트된 길이 로 참조요소의 가운데 좌표 를 구함 그리고
팝업 요소의 길이의 절반을 빼면서 가운데 정렬이 되도록 함
*/
