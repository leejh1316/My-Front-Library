var PlacementStrategy = /** @class */ (function () {
    function PlacementStrategy(referenceRect, popupRect, options) {
        this.referenceRect = referenceRect;
        this.popupRect = popupRect;
        this.options = options;
        this.coord = this.getCoordinate();
        (this.pageX = scrollX), (this.pageY = scrollY);
    }
    //overflow : true , not overflow : false
    PlacementStrategy.prototype.checkOverflow = function () {
        return !(this.coord.top >= scrollY &&
            this.coord.left >= scrollX &&
            this.coord.top + this.popupRect.height <= scrollY + innerHeight &&
            this.coord.left + this.popupRect.width <= scrollX + innerWidth);
    };
    return PlacementStrategy;
}());
export { PlacementStrategy };
/*
window이벤트 함수가


placemnet가 내뱉는값
레퍼런스 엘리먼트의 getBoundingClinetRect(), 절대좌표(scrollX, Y) 통해
계산되는 함수 getTop(), getLeft() (정적값)


만약 window(scroll, resize)에 넘는다면 4가지 모드 설정
filp : 반전 (함수로 작성하여 )
push : 밀기
hide : 숨기기
각 모드 클래스 전략에서 관리함



update() 로 참조요소가 변경되는 이벤트 진행후 팝업요소가 업데이트되는 메소드

*/
