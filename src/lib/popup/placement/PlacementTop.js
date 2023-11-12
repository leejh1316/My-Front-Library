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
var PlacementTop = /** @class */ (function (_super) {
    __extends(PlacementTop, _super);
    function PlacementTop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlacementTop.prototype.getPlacementName = function () {
        return "top";
    };
    PlacementTop.prototype.getCoordinate = function () {
        return {
            top: this.referenceRect.top +
                scrollY -
                this.popupRect.height -
                this.options.gap,
            left: this.referenceRect.width / 2 +
                (this.referenceRect.left + scrollX) -
                this.popupRect.width / 2,
        };
    };
    return PlacementTop;
}(PlacementStrategy));
export { PlacementTop };
