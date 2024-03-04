# Ryan's Vue3 Awesome Starter

![Author](https://img.shields.io/badge/Author-ryan-orange.svg)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Last Commit](https://img.shields.io/github/last-commit/ryan-ahn/boilerplate-vue3-client)

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

## Frameworks
- **Core** : Vue3
- **Store** : Pinia

## Code Pattern
- **Static(public)**
- **Root(src)** <br/>
- ⎣&nbsp;**api** - rest api <br/>
- ⎣&nbsp;**assets** - static resource <br/>
- ⎣&nbsp;**components** - atomic stateless components <br/>
- ⎣&nbsp;**containers** - stateful components <br/>
- ⎣&nbsp;**interface** - interfaces <br/>
- ⎣&nbsp;**layouts** - layouts <br/>
- ⎣&nbsp;**router** - routers <br/>
- ⎣&nbsp;**store** - pinia store <br/>
- ⎣&nbsp;**styles** - style set <br/>
- ⎣&nbsp;**utils** - hooks, utils <br/>
- ⎣&nbsp;**views** - pages <br/>

## Getting Started
### 1) Installation
```shell
npx vue3-starter my-project
cd my-project
npm install
```
### 2) Run development server
```shell
npm run dev
```

## Using with Vue3 Script Setup

```vue
<script setup lang="ts">
// use function
const function = () => {console.log('Hello World!')}
// use props
const props = defineProps({title})
</script>
```

## Using with Store

```vue
<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useDataStore from '@store/useDataStore';
// use store
const store = useDataStore();
// use store state
const { data } = storeToRefs(store);
// use store function
store.getData()
</script>

<style lang="scss">
```

## Using Mixin

```scss
.app {
  // flex set(justify-content, align-items, flex-direction)
  @include flexSet('center', 'center', 'row')

  // box set(width, height, border-radius)
  @include boxSet(00px, 00px, 00px)

  // color set(color, background-color)
  @include colorSet($white, $black)

  // background set(url, object-fit)
  @include backgroundSet('url', 00px)

  // font set(font-size, font-weight, line-height)
  @include fontSet(00px, 000, 00px);

  // ellipsis set(line, line-height)
  @include ellipsisSet(0, 00px)

  // shadow set(length, length, blur, color, opacity)
  @include shadowSet(0, 0, 0, $white, 0.1)
}
```
