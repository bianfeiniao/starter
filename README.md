### 特点
- [x] 集成`vue-router`, `vuex`, `axios`。
- [x] 集成路由过渡效果。
- [x] 集成`axios`的api至全局的`Vue.http`，实例的`this.$http`。
- [x] 集成`axios`的拦截器，对请求进行Header拦截操作，并实现`Loading`效果。
- [x] 集成`v-keep-scroll`指令 支持在`keep-alive`组件内保存任意div滚动条位置。
- [x] 使用`bowl.js` 对生产环境的的 `js/css` 进行本地缓存。
- [x] 使用`Webpack2`的`System.import`进行异步路由组件加载，并实现加载进度条的展现(参考`nuxt.js`实现)。
- [x] 使用`vue-router`的`beforeEach`实现单页切换修改`document.title`。
- [x] 使用`vuex-localstorage` 对vuex的状态持久化。
- [x] 使用`optimize-css-assets-webpack-plugin`进行css压缩。
### 开始使用
```bash
$ npm install vue-cli -g
$ vue init shmy/starter <your-project>
$ cd  <your-project>
$ npm install
$ npm run dev
```