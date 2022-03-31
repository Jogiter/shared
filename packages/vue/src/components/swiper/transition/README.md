# vue transitions

- [x] support integrate with animate.css
- [x] default transition is fadeIn

## transition

default transition in `Swiper.vue`

```js
export default {
  name: 'swiper',
  props: {
    prevTransition: {
      type: Object,
      default: () => ({
        'enter-class': '',
        'enter-active-class': 'animated fadeIn',
        'enter-to-class': '',
        'leave-class': '',
        'leave-active-class': 'animated fadeOut',
        'leave-to-class': '',
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
        'leave-to-class': '',
      })
    },
  }
}
```

>[Vuejs transitions](https://vuejs.org/v2/guide/transitions.html#Custom-Transition-Classes)

## readings

- [Vuejs transitions](https://vuejs.org/v2/guide/transitions.html#Custom-Transition-Classes)
- [animate.css](https://daneden.github.io/animate.css/)
