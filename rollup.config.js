import vuePlugin from 'rollup-plugin-vue';
import babel from "@rollup/plugin-babel";

const iife = {
    input: './src/index.js',     // 必须
    output: [{
        // 核心选项
        file: 'dist/index.js',    // 必须
        name: "KevinUi",
        format: "iife",
        globals: {
            vue: "Vue",
        },
    }],
    external: ["vue"],
    plugins: [
        babel(),
        vuePlugin(),
    ],
}



export default [iife]
