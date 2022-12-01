import Vue from 'vue'
import App from './App.vue'
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'
import microApps from './micro-app'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false

const instance = new Vue({
  render: h => h(App)
}).$mount('#app')

// 定义loader方法，loading改变时，将变量赋值给App.vue的data中的isLoading
function loader (loading) {
  if (instance && instance.$children) {
    // instance.$children[0] 是App.vue，此时直接改动App.vue的isLoading
    instance.$children[0].isLoading = loading
  }
}

// 给子应用配置加上loader方法
const apps = microApps.map(item => {
  return {
    ...item,
    loader
  }
})

registerMicroApps(apps, {
  beforeLoad: app => {
    console.log('beforeLoad', app.name)
  },
  beforeMount: [
    app => {
      console.log('beforeMount', app.name)
    }
  ],
  afterMount: [
    app => {
      console.log('afterMount', app.name)
    }
  ],
  afterUnmount: [
    app => {
      console.log('afterUnmount', app.name)
    }
  ]
})
setDefaultMountApp('/sub-vue')
start()
