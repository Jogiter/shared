<script lang="ts">
import { defineComponent, ref } from 'vue-demi'
import { Swiper, Slide } from './components/Swiper'

export default defineComponent({
  components: {
    Swiper,
    Slide,
  },
  setup() {
    const images = ref([])

    setTimeout(() => {
      images.value = [
        'https://dummyimage.com/400x300/30e320',
        'https://dummyimage.com/400x300/144cdb',
        'https://dummyimage.com/400x300/db1414',
        'https://dummyimage.com/400x300/f5c72e',
      ]
    }, 2000)

    return {
      images,
    }
  },
})
</script>

<template>
  <div>
    <h2>Vue components</h2>
    <hr />
    <div class="flex flex-wrap justify-around">
      <section>
        <h2>default Transition Classes: fadeIn</h2>
        <Swiper
          direction="vertical"
          :prevTransition="{
            'enter-active-class': 'animated fadeIn',
            'leave-active-class': 'animated fadeOut',
          }"
          :nextTransition="{
            'enter-active-class': 'animated fadeIn',
            'leave-active-class': 'animated fadeOut',
          }"
        >
          <Slide v-for="(image, index) of images" :key="index">
            <img :src="image" alt="" draggable="false" />
          </Slide>
        </Swiper>
      </section>

      <section>
        <h2>Custom Transition Classes: fadeIn-X</h2>
        <Swiper
          :prevTransition="{
            'enter-active-class': 'animated fadeInLeft',
            'leave-active-class': 'animated fadeOutRight',
          }"
          :nextTransition="{
            'enter-active-class': 'animated fadeInRight',
            'leave-active-class': 'animated fadeOutLeft',
          }"
        >
          <Slide v-for="(image, index) of images" :key="index">
            <img :src="image" alt="" draggable="false" />
          </Slide>
        </Swiper>
      </section>

      <section>
        <h2>Custom Transition Classes: fadeIn-Y</h2>
        <Swiper
          direction="vertical"
          :prevTransition="{
            'enter-active-class': 'animated fadeInDown',
            'leave-active-class': 'animated fadeOutDown',
          }"
          :nextTransition="{
            'enter-active-class': 'animated fadeInUp',
            'leave-active-class': 'animated fadeOutUp',
          }"
        >
          <Slide v-for="(image, index) of images" :key="index">
            <img :src="image" alt="" draggable="false" />
          </Slide>
        </Swiper>
      </section>

      <section>
        <h2>loop: false</h2>
        <Swiper :loop="false">
          <Slide v-for="(image, index) of images" :key="index">
            <img :src="image" alt="" draggable="false" />
          </Slide>
        </Swiper>
      </section>

      <section>
        <h2>autoplay: false</h2>
        <Swiper :autoplay="false">
          <Slide v-for="(image, index) of images" :key="index">
            <img :src="image" alt="" draggable="false" />
          </Slide>
        </Swiper>
      </section>
      <section>
        <h2>navigationEnabled: true & paginationEnabled: true</h2>
        <Swiper :navigationEnabled="true" :paginationEnabled="true">
          <Slide v-for="(image, index) of images" :key="index">
            <img :src="image" alt="" draggable="false" />
          </Slide>
        </Swiper>
      </section>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
