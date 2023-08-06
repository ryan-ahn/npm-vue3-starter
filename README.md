# Vue3 Awesome Starter

![Author](https://img.shields.io/badge/Author-ryan-orange.svg)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Last Commit](https://img.shields.io/github/last-commit/ryan-ahn/boilerplate-vue3-webpack)

## Features
- [x] 📦&nbsp;&nbsp;Typed Programming (Typescript)
- [x] 📚&nbsp;&nbsp;Composition API & Setup (Vue3)
- [x] 🛹&nbsp;&nbsp;Simple Store (Pinia)
- [x] 🧵&nbsp;&nbsp;Built-in Component & Layout
- [x] 📙&nbsp;&nbsp;Use Stric Codebase (ESLint)
- [x] 📘&nbsp;&nbsp;Use Stric Style (StyleLint)
- [x] ✨&nbsp;&nbsp;Setting Reset Style
- [x] ⚡️&nbsp;&nbsp;Setting Mixin Style
- [x] 📍&nbsp;&nbsp;Absolute path
- [ ] 📱&nbsp;&nbsp;Check Device
- [ ] 🗂️&nbsp;&nbsp;SSR & Page SEO
- [ ] 🪄&nbsp;&nbsp;Theme Mode

## Framworks
- **Bundler** : Webpack
- **Core** : Vue3
- **Store** : Pinia

## Code Pattern
- **Static(public)**
- **Root(src)** <br/>
- ⎣&nbsp;**api** - rest api <br/>
- ⎣&nbsp;**assets** - 정적 데이터, 파일 등 <br/>
- ⎣&nbsp;**components** - 최소 단위 컴포넌트(비즈니스 로직, 상태값 사용 불가) <br/>
- ⎣&nbsp;**containers** - 컨트롤 로직이 존재하는 뷰 컴포넌트, 최소 단위 컴포넌트의 조합으로 만들어진다. <br/>
- ⎣&nbsp;**interface** - 객체 타입 지정을 모아두는 공간 <br/>
- ⎣&nbsp;**layouts** - 최초 고정 영역(device단위 또는 gnb,lnb로 나눈다) <br/>
- ⎣&nbsp;**router** - vue router<br/>
- ⎣&nbsp;**store** - pinia store<br/>
- ⎣&nbsp;**styles** - css셋 모음<br/>
- ⎣&nbsp;**utils** - helper, handler 모음<br/>
- ⎣&nbsp;**views** - 페이지 단위의 vue 컴포넌트<br/>

## Getting Started
### 1) Installation
```shell
git clone ryan-ahn/boilerplate-vue3-webpack
cd boilerplate-vue3-webpack
npm install
```
### 2) Configuration VSCode
```markdown
setting.json 파일을 vscode 세팅에 입력
관련 익스텐션 전부 설치(문서 확인)
```
### 3) Run development server
```shell
npm run dev
```

## Using with Vue3 Setup

```vue
<template>
  <h1>{{ title }}</h1>
</template>

<script setup lang="ts">
// 함수 생성
const function = () => {console.log('Hello World!')}
// 프롭스 정의
const props = defineProps({title})
</script>
```

## Using with Store

```vue
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useDataStore from '@store/useDataStore';
// 스토어 불러오기
const store = useDataStore();
// 구조 분해 할당
const { data } = storeToRefs(store);
// 함수 사용
store.getData()
</script>

<style lang="scss">
```

## Using Mixin

```scss
.app {
  // 플렉스 세트(기준 정렬, 대칭 정렬, 방향)
  @include flexSet('center', 'center', 'row')

  // 박스 세트(가로, 세로, 라운딩)
  @include boxSet(00px, 00px, 00px)

  // 컬러 세트(폰트 컬러, 배경 컬러)
  @include colorSet($white, $black)

  // 배경 세트(이미지, 사이즈)
  @include backgroundSet('url', 00px)

  // 폰트 세트(폰트 크기, 두께, 줄간격)
  @include fontSet(00px, 000, 00px);

  // 일립시스 세트(줄수, 줄간격)
  @include ellipsisSet(0, 00px)

  // 쉐도우 세트(가로, 세로, 블러, 컬러, 투명도)
  @include shadowSet(0, 0, 0, $white, 0.1)
}
```
