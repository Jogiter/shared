<template>
  <transition
    :enter-class="transition['enter-class']"
    :enter-active-class="transition['enter-active-class']"
    :enter-to-class="transition['enter-to-class']"
    :leave-class="transition['leave-class']"
    :leave-active-class="transition['leave-active-class']"
    :leave-to-class="transition['leave-to-class']"
    >
    <div class="slide-item" v-show="active">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'slide',
  inject: [
    'addSwiperItem',
    'removeSwiperItem',
    'isSwiperActive',
    'getTransition'
  ],
  computed: {
    active () {
      return this.isSwiperActive(this)
    },
    transition () {
      return this.getTransition()
    }
  },
  created () {
    this.addSwiperItem(this)
  },
  beforeDestroy () {
    this.removeSwiperItem(this)
  }
}
</script>

<style lang="css">
.slide-item {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  user-select: none;
  transition-property: all;
}
</style>
