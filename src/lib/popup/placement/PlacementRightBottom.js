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
var PlacementRightBottom = /** @class */ (function (_super) {
    __extends(PlacementRightBottom, _super);
    function PlacementRightBottom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlacementRightBottom.prototype.getPlacementName = function () {
        return "right-bottom";
    };
    PlacementRightBottom.prototype.getCoordinate = function () {
        return {
            top: this.referenceRect.bottom + scrollY - this.popupRect.height,
            left: this.referenceRect.right + this.options.gap + scrollX,
        };
    };
    return PlacementRightBottom;
}(PlacementStrategy));
export { PlacementRightBottom };
/*

뷰포트를 벗어남을 감지하는 방법
scrollY ~ scrolly+innerHeight 의 사이에 있으면 뷰포트 내부에 있는거임
 */
