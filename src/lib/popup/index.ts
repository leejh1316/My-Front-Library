/*

팝업창이 어디에 위치할지 도와주는 라이브러리


css : overflow 사용하기 위해선 엘리먼트의 절대위치값을 알아야한다.

1. 선택한 엘리먼트의 뷰포트에서의 좌표 근처에 팝업을 표시한다.
2. place : left right top bottom 
3. 팝업될 엘리먼트 등록 로직
4. 팝업의 타겟 지정
5.  팝업 오버플로우 방지 기능 ()

팝업이 뷰포트를 넘어간다면?
1. popup의 getBoundingClientRect() 함수를 통해 x, y좌표를 확인하여 음수값 또는  viewport를 넘어가는 값이 있는지 체크한다. 



디렉티브로
v-popper : 팝업타겟 지정
(팝업 엘리번트를 지정하는 디렉티브)


createPopup()
레퍼런스 요소와 팝업요소를 집어넣어 팝업 인스턴스를 만든다.


Popup요소의 위치값을 저장하는 coords 객체에 담는다.
PositionCalculator 포지션 계산기로 옵션에 집어넣은 값들중 placment를 확인하여 계산한다.




1. createPopup을 통해 참조요소와 팝업요소, 옵션값을 받는다.
새로운 Popup 객체를 만들어서 



*/
import { VueElement, ref, DirectiveBinding, watch } from "vue";
import Popup from "./component/Popup.vue";
import { Options, Instance } from "./types";
export * from './popup-core'
export const VuePopupPlugin = {
  install: function (app: any, options?: any) {
    app.component("Popup", Popup);
    app.directive(
      "popup",
      (element: VueElement, directive?: DirectiveBinding) => {
        const teleportTarget = document.querySelector("#app");
        const parent = ref<VueElement>();
        parent.value = element.parentElement;
        teleportTarget?.appendChild(element);
        element.remove();
        watch(
          parent,
          () => {
            // popup logic
          },
          {
            deep: true,
            immediate: true,
          }
        );
      }
    );
  },
};
