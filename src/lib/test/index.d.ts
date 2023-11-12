// .d.ts파일은 js로 된 로직을 ts로 인식하고 싶을때 사용하는 거임
// 타입을선언하는 ts파일을 .d.ts파일임
// 테스트해보면 index.js의 ac()라는 함서는 자동완성이 안됨
// 대부분 로직을 index.js에 보관하자.

export function add(a: number, b: number): number;
export function subtract(a: number, b: number): number;
export declare const TestVuePlugin : {
    install : (app:any)=>void
}

export * from './types'