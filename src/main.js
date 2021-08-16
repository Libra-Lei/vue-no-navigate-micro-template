/**
 * @Description: 
 * @Author: Libra
 * @GitHub: https://github.com/Libra-Lei
 * @Date: 2021-08-13 10:59:29
 * @LastEditors: Libra
 * @LastEditTime: 2021-08-13 16:58:28
 */

import Vue from 'vue'
import App from './App.vue'

// 私有组件库
import '@libra-lei/yl-ui/lib/yl-ui.css';
import YlUI from '@libra-lei/yl-ui';
Vue.use(YlUI);

// Vuesax Component Framework
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css' //Material Icons
import 'vuesax/dist/vuesax.css'; // Vuesax
Vue.use(Vuesax)

// Theme Configurations
import '../themeConfig.js'
// Globally Registered Components
import './globalComponents.js'
// Styles: SCSS
import './assets/scss/main.scss'
// Tailwind
import '@/assets/css/main.css'

// Vue Router
import router from './routes'
// Vuex Store
import store from './store/store'

// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)

// PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

// Feather font icon
require('./assets/css/iconfont.css')

Vue.config.productionTip = false

// 路由守卫
import '@/permission'

// 实例
let instance = null;
const render = (props = {}) => {
  const { container } = props;

  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 微前端预留 接口
if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[微应用] vue app bootstraped');
}

export async function mount(props) {
  console.log('[微应用] props from main framework', props);
  // storeTest(props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  // router = null;
}

