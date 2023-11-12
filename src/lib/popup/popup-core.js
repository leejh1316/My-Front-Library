var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { usePlacement } from "./placement/usePlacement";
import { throttle } from "./util/throttle";
export function createPopup(reference, popup, options) {
    return new Popup(reference, popup, options);
}
var defaultGap = 10;
var defaultPlacement = "right-top";
var defaultOptions = {
    placement: defaultPlacement,
    event: {
        resize: true,
        scroll: true,
    },
    mode: {
        auto: true,
        hide: true,
        push: false,
    },
    gap: defaultGap,
};
var Popup = /** @class */ (function () {
    function Popup(referenceElement, popupElement, options) {
        this.options = __assign(__assign({}, defaultOptions), options);
        this.referenceElement = referenceElement;
        this.popupElement = popupElement;
        this.originPopupSize = (function () {
            var _a = getComputedStyle(popupElement), width = _a.width, height = _a.height;
            return { width: width, height: height };
        })();
        this.bindModeFunction = throttle(this.modeManage.bind(this), 100);
        this.update();
        document.body.insertBefore(this.popupElement, null);
    }
    Popup.prototype.update = function () {
        this.placementStrategy = usePlacement(this.options.placement, this.referenceElement.getBoundingClientRect(), this.popupElement.getBoundingClientRect(), this.options);
        this.defaultCoordinate = this.placementStrategy.getCoordinate();
        this.place(this.defaultCoordinate);
        this.eventManage();
        this.modeManage();
    };
    Popup.prototype.setOptions = function (options) {
        this.options = __assign(__assign({}, this.options), options);
        this.update();
    };
    /* logic */
    Popup.prototype.place = function (coord) {
        this.popupElement.style.position = "absolute";
        this.popupElement.style.width = this.originPopupSize.width;
        this.popupElement.style.height = this.originPopupSize.height;
        // this.popupElement.style.transition = "0.3s ease";
        this.popupElement.style.top = "".concat(coord.top, "px");
        this.popupElement.style.left = "".concat(coord.left, "px");
    };
    /* modes */
    Popup.prototype.modeManage = function () {
        this.auto();
        this.push();
        this.hide();
    };
    Popup.prototype.auto = function () {
        var _a;
        if ((_a = this.options.mode) === null || _a === void 0 ? void 0 : _a.auto) {
            var placementArray = [
                "top",
                "top-right",
                "top-left",
                "right",
                "right-top",
                "right-bottom",
                "bottom",
                "bottom-right",
                "bottom-left",
                "left",
                "left-top",
                "left-bottom",
            ];
            if (this.placementStrategy.checkOverflow()) {
                for (var _i = 0, placementArray_1 = placementArray; _i < placementArray_1.length; _i++) {
                    var placement = placementArray_1[_i];
                    // if (this.placementStrategy.getPlacementName() === placement) continue;
                    var place = usePlacement(placement, this.referenceElement.getBoundingClientRect(), this.popupElement.getBoundingClientRect(), this.options);
                    if (!place.checkOverflow()) {
                        this.place(place.getCoordinate());
                        break;
                    }
                }
            }
            else {
                this.place(this.defaultCoordinate);
            }
        }
    };
    Popup.prototype.push = function () {
        var _a;
        if ((_a = this.options.mode) === null || _a === void 0 ? void 0 : _a.push) {
            //밀기 clientRect.left, top으로 체크 가능
            //범위 refer의 top
            // const place = usePlacement(this.options.placement, this.referenceElement.getBoundingClientRect(), this.popupElement.getBoundingClientRect(), this.options)
            // this.currentCoordinate = this.placementStrategy.getOverflowPreventCoordinate(this.currentCoordinate)
            // this.place(this.currentCoordinate);
            // console.log(this.popupElement.getBoundingClientRect)
        }
    };
    Popup.prototype.hide = function () {
        var _a;
        if ((_a = this.options.mode) === null || _a === void 0 ? void 0 : _a.hide) {
        }
    };
    Popup.prototype.eventManage = function () {
        var _a, _b;
        if ((_a = this.options.event) === null || _a === void 0 ? void 0 : _a.resize)
            window.addEventListener("resize", this.bindModeFunction);
        else
            window.removeEventListener("resize", this.bindModeFunction);
        if ((_b = this.options.event) === null || _b === void 0 ? void 0 : _b.scroll)
            window.addEventListener("scroll", this.bindModeFunction);
        else
            window.removeEventListener("scroll", this.bindModeFunction);
    };
    return Popup;
}());
export { Popup };
