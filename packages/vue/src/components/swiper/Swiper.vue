<template>
  <div class="swiper">
    <div ref="swiper-wrapper" class="swiper-wrapper">
      <slot></slot>
    </div>

    <div v-if="navigationEnabled">
      <div class="swiper-nav swiper-nav__prev" @click="prev" :class="prevDisabled ? 'disabled' : ''">
        <slot name="prev">
          <img src="./svg/prev.svg" alt="prev" :width="navigationSize" :height="navigationSize">
        </slot>
      </div>
      <div class="swiper-nav swiper-nav__next" @click="next" :class="nextDisabled ? 'disabled' : ''">
        <slot name="next">
          <img src="./svg/next.svg" alt="next" :width="navigationSize" :height="navigationSize">
        </slot>
      </div>
    </div>

    <slot name="pagination" v-if="paginationEnabled">
      <ul class="swiper-pagination">
        <li
          v-for="(value, index) of items.length"
          :key="index"
          class="swiper-pagination__dot"
          :class="index === activeIndex ? 'active' : ''"
          @click="changeActiveIndex(index)">
        </li>
      </ul>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'swiper',
  model: {
    props: 'active',
    event: 'activechange'
  },
  props: {
    active: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: true
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000,
      validator: value => value > 0
    },
    prevTransition: {
      type: Object,
      default: () => ({
        'enter-class': '',
        'enter-active-class': 'animated fadeIn',
        'enter-to-class': '',
        'leave-class': '',
        'leave-active-class': 'animated fadeOut',
        'leave-to-class': ''
      })
    },
    nextTransition: {
      type: Object,
      default: () => ({
        'enter-class': '',
        'enter-active-class': 'animated fadeIn',
        'enter-to-class': '',
        'leave-class': '',
        'leave-active-class': 'animated fadeOut',
        'leave-to-class': ''
      })
    },
    navigationEnabled: {
      type: Boolean,
      default: false
    },
    navigationSize: {
      type: Number,
      default: 48
    },
    paginationColor: {
      type: String,
      default: '#ff5722'
    },
    paginationEnabled: {
      type: Boolean,
      default: false
    },
    ratio: {
      type: Number,
      default: 0.5
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator: value => ['horizontal', 'vertical'].indexOf(value) > -1
    },
    minDistance: {
      type: Number,
      default: 16
    }
  },
  provide () {
    return {
      addSwiperItem: this.addSwiperItem,
      removeSwiperItem: this.removeSwiperItem,
      isSwiperActive: this.isSwiperActive,
      getTransition: this.getTransition
    }
  },
  data () {
    return {
      items: [],
      activeIndex: this.active,
      timer: null,
      isTouch: typeof window !== 'undefined' && 'ontouchstart' in window,
      startPos: 0,
      endPos: 0,
      inverse: false
    }
  },
  computed: {
    prevDisabled () {
      return this.activeIndex === 0 && !this.loop
    },
    nextDisabled () {
      return this.activeIndex === this.items.length - 1 && !this.loop
    }
  },
  mounted () {
    // setup the start event only if touch device or mousedrag activated
    this.$refs['swiper-wrapper'].addEventListener(
      this.isTouch ? 'touchstart' : 'mousedown',
      this.onStart
    )

    if (this.autoplay) {
      this.start()
    }

    this.$emit('mounted')
  },
  beforeDestroy () {
    if (this.timer) clearInterval(this.timer)
  },
  methods: {
    getTransition () {
      return this.inverse ? this.prevTransition : this.nextTransition
    },
    addSwiperItem (item) {
      const index = this.$children.indexOf(item)
      return index === -1 ? this.items.push(item) : this.items.splice(index, 0, item)
    },
    removeSwiperItem (item) {
      const index = this.items.indexOf(item)
      if (index === -1) return
      this.items.splice(index, 1)
    },
    isSwiperActive (item) {
      return this.items.indexOf(item) === this.activeIndex
    },
    start () {
      this.loopHandle()
    },
    loopHandle () {
      if (!this.loop) return
      if (this.timer) clearInterval(this.timer)
      this.timer = setInterval(() => this.next(), this.interval)
    },
    next () {
      if (this.nextDisabled) return
      let active
      if (this.activeIndex === this.items.length - 1) {
        active = 0
      } else {
        active = this.activeIndex + 1
      }
      this.inverse = false
      this.changeActiveIndex(active)
    },
    prev () {
      if (this.prevDisabled) return
      let active
      if (this.activeIndex === 0) {
        active = this.items.length - 1
      } else {
        active = this.activeIndex - 1
      }
      this.inverse = true
      this.changeActiveIndex(active)
    },
    changeActiveIndex (index) {
      this.loopHandle()
      this.activeIndex = index
      this.$emit('activechange', index)
    },
    onStart (e) {
      // detect right click
      if (e.button === 2) {
        return
      }

      document.addEventListener(
        this.isTouch ? 'touchend' : 'mouseup',
        this.onEnd,
        true
      )

      document.addEventListener(
        this.isTouch ? 'touchmove' : 'mousemove',
        this.onMove,
        true
      )

      this.startPos = {
        x: this.isTouch ? e.touches[0].clientX : e.clientX,
        y: this.isTouch ? e.touches[0].clientY : e.clientY,
        timeStamp: e.timeStamp
      }
    },
    onEnd (e) {
      this.endPos = {
        x: this.isTouch ? e.changedTouches[0].clientX : e.clientX,
        y: this.isTouch ? e.changedTouches[0].clientY : e.clientY,
        timeStamp: e.timeStamp
      }
      const deltaX = this.endPos.x - this.startPos.x
      const deltaY = this.endPos.y - this.startPos.y

      e.stopImmediatePropagation()

      if (this.direction === 'vertical') {
        // vertical direction
        if (Math.abs(deltaX) < this.ratio * Math.abs(deltaY)) {
          deltaY < -this.minDistance && this.prev()
          deltaY > this.minDistance && this.next()
        }
      }
      if (this.direction === 'horizontal') {
        // horizontal direction
        if (Math.abs(deltaY) < this.ratio * Math.abs(deltaX)) {
          deltaX < -this.minDistance && this.next()
          deltaX > this.minDistance && this.prev()
        }
      }

      // clear events listeners
      document.removeEventListener(
        this.isTouch ? 'touchend' : 'mouseup',
        this.onEnd,
        true
      )
      document.removeEventListener(
        this.isTouch ? 'touchmove' : 'mousemove',
        this.onMove,
        true
      )
    },
    onMove (e) {
      this.$emit('onMove', e, this)
    }
  }
}
</script>

<style lang="css">
@import url('./transition/fadeIn.css');

.swiper {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
}
.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* navigation */
.swiper-nav {
  position: absolute;
  top: 50%;
  box-sizing: border-box;
  color: #000;
  text-decoration: none;
  appearance: none;
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  outline: none;
}
.swiper-nav.disabled {
  cursor: not-allowed;
  filter: alpha(opacity=65);
  -webkit-box-shadow: none;
  box-shadow: none;
  opacity: .65;
}
.swiper-nav__prev {
  left: 0;
  transform: translate(-100%, -50%);
}
.swiper-nav__next {
  right: 0;
  transform: translate(100%, -50%);
}
.swiper-nav__disabled {
  opacity: 0.5;
  cursor: default;
}

/* pagination */
.swiper-pagination {
  position: absolute;
  width: 100%;
  bottom: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
}
.swiper-pagination__dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 0 4px;
  border-radius: 100%;
  background: #CCC;
  cursor: pointer;
}
.swiper-pagination__dot.active{
  background-color: #ff5722;
}
</style>
