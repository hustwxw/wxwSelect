import Vue from 'vue'
import App from './App.vue'
import wxwVueSelect from './lib/index.js';
Vue.use(wxwVueSelect);
new Vue({
	el: '#app',
	render: h => h(App)
})