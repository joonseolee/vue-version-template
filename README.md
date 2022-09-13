# vue-version-template

각각의 템플릿 모두 composition api 를 사용할것이고 각 형태가 어떻게 다른지 확인할겸 만들어봄.

## vue 2 + composition api

그룹에서 벗어날수있다는것과 this 지옥에서 벗어날수있다는것이 가장 큰 장점인걸로 보인다.  
다만 `vuex` 사용하는데 계속 버그가 있어서 이부분은 차후 확인이 필요.  

설정해야할부분이 아래와 같다.  

1. 의존 추가 
```
npm i @vue/composition-api 
npm i -D @vue/runtime-dom eslint-plugin-vue unplugin-vue2-script-setup vue-eslint-parser vue-tsc vue-template-compiler
```

2. vue, vue-template-compiler 버전 ~2.6.0 으로 변경 

3. vue-config.js 파일 추가 

```js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ScriptSetup = require("unplugin-vue2-script-setup/webpack").default;

module.exports = {
  parallel: false,
  configureWebpack: {
    plugins: [
      ScriptSetup({
        /* options */
      }),
    ],
  },
  chainWebpack(config) {
    // disable type check and let `vue-tsc` handles it
    config.plugins.delete("fork-ts-checker");
  },
};
```

4. tsconfig 내에 아래 값들 추가 
`target` 은 `Volar` 가 기본적으로 vue3 로 인식하기때문에 수정해줘야한다.  

```json
"types": [
      "webpack-env",
      "unplugin-vue2-script-setup/types"
    ],
"vueCompilerOptions": {
    "target": 2,
    "experimentalCompatMode": 2
  },
```

5. eslintrc.js 에 아래 내용 추가

```json
  parser: "vue-eslint-parser",
    parserOptions: {
      ecmaVersion: 2022,
      sourceType: "module"
    },
```

6. main.ts 에 아래 내용 추가
```js
Vue.use(vueCompositionApi);
```

7. `vue`, `vetur` 삭제하고 `volar` 설치

## vue 3 + composition api + vite 

vite 때문에 쓰는건데 다만 아쉬운점은 `vuetify` 가 여전히 베타버전이라는 점이다.  
그외에는 위와 같이 설정해야할부분이 없다.  
