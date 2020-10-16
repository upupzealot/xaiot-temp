import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import API from '@/components-shared/api';
import LoginState from '@/components-shared/login-state';
import App from './app.vue';
import router from './router';
import store from './store/store';

Vue.use(ElementUI);

Vue.config.productionTip = false;

Vue.prototype.$api = new API(Vue);

// 验证用户当前登录态
const loginState = new LoginState(router, store, Vue);
router.beforeEach(loginState.getChecker());

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
