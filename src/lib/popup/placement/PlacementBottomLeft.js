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
var PlacementBottomLeft = /** @class */ (function (_super) {
    __extends(PlacementBottomLeft, _super);
    function PlacementBottomLeft() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlacementBottomLeft.prototype.getPlacementName = function () {
        return "bottom-left";
    };
    PlacementBottomLeft.prototype.getCoordinate = function () {
        return {
            top: this.referenceRect.bottom + this.options.gap + scrollY,
            left: this.referenceRect.left + scrollX,
        };
    };
    return PlacementBottomLeft;
}(PlacementStrategy));
export { PlacementBottomLeft };
