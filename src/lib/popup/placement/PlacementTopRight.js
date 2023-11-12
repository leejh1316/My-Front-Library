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
var PlacementTopRight = /** @class */ (function (_super) {
    __extends(PlacementTopRight, _super);
    function PlacementTopRight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlacementTopRight.prototype.getPlacementName = function () {
        return "top-right";
    };
    PlacementTopRight.prototype.getCoordinate = function () {
        return {
            top: this.referenceRect.top +
                scrollY -
                this.popupRect.height -
                this.options.gap,
            left: this.referenceRect.right + scrollX - this.popupRect.width,
        };
    };
    return PlacementTopRight;
}(PlacementStrategy));
export { PlacementTopRight };
