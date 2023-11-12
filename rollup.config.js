import typescript from "@rollup/plugin-typescript"
export default {
    input:"./src/lib/popup/popup-core.js",
    output:{
        file:'./dist/popup',
        format:'es',
        sourcemap:true
    },
    plugin:[typescript({ compilerOptions: {lib: ["ES2020", "DOM", "DOM.Iterable", "ES6"], target: "ES2020"}})]
}