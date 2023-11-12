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
var PlacementBottomRight = /** @class */ (function (_super) {
    __extends(PlacementBottomRight, _super);
    function PlacementBottomRight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlacementBottomRight.prototype.getPlacementName = function () {
        return "bottom-right";
    };
    PlacementBottomRight.prototype.getCoordinate = function () {
        return {
            top: this.referenceRect.bottom + this.options.gap + scrollY,
            left: this.referenceRect.right + scrollX - this.popupRect.width,
        };
    };
    return PlacementBottomRight;
}(PlacementStrategy));
export { PlacementBottomRight };
