import Swiper from './Swiper.vue'
import Slide from './Slide.vue'
import type { App } from 'vue-demi'

export default {
  install(app: App) {
    app.component('swiper', Swiper)
    app.component('slide', Slide)
  },
}

export { Swiper, Slide }
