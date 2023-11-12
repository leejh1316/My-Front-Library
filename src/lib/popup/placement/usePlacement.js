import { PlacementBottom, PlacementBottomLeft, PlacementBottomRight, PlacementLeft, PlacementLeftBottom, PlacementLeftTop, PlacementRight, PlacementRightBottom, PlacementRightTop, PlacementTop, PlacementTopLeft, PlacementTopRight, } from "./index";
export var usePlacement = function (placement, referenceRect, popupRect, options) {
    var placementFactory = {
        bottom: new PlacementBottom(referenceRect, popupRect, options),
        "bottom-left": new PlacementBottomLeft(referenceRect, popupRect, options),
        "bottom-right": new PlacementBottomRight(referenceRect, popupRect, options),
        left: new PlacementLeft(referenceRect, popupRect, options),
        "left-bottom": new PlacementLeftBottom(referenceRect, popupRect, options),
        "left-top": new PlacementLeftTop(referenceRect, popupRect, options),
        right: new PlacementRight(referenceRect, popupRect, options),
        "right-bottom": new PlacementRightBottom(referenceRect, popupRect, options),
        "right-top": new PlacementRightTop(referenceRect, popupRect, options),
        top: new PlacementTop(referenceRect, popupRect, options),
        "top-left": new PlacementTopLeft(referenceRect, popupRect, options),
        "top-right": new PlacementTopRight(referenceRect, popupRect, options),
    };
    return placementFactory[placement];
};
