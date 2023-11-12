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
var PlacementRightTop = /** @class */ (function (_super) {
    __extends(PlacementRightTop, _super);
    function PlacementRightTop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlacementRightTop.prototype.getPlacementName = function () {
        return "right-top";
    };
    PlacementRightTop.prototype.getCoordinate = function () {
        return {
            top: this.referenceRect.top + scrollY,
            left: this.referenceRect.right + this.options.gap + scrollX,
        };
    };
    return PlacementRightTop;
}(PlacementStrategy));
export { PlacementRightTop };
