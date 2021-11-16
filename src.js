// --------Demo --------------------

const Demo = {
    data() {
      return {
        show: true
      }
    }
  }
  
  Vue.createApp(Demo).mount('#demo')

// --------Demo 2--------------------

const Demo2 = {
data() {
    return {
    show: true
    }
}
}
Vue.createApp(Demo2).mount('#demo2')

// --------Demo 3--------------------


const Demo3 = {
  data() {
    return {
      x: 0
    }
  },
  methods: {
    xCoordinate(e) {
      this.x = e.clientX
    }
  }
}

Vue.createApp(Demo3).mount('#demo3')


// --------Demo 4--------------------


const Demo4 = {
  data() {
    return {
      show: true
    }
  }
}

Vue.createApp(Demo4).mount('#demo4')

// --------Demo 5--------------------

const Demo5 = {
  data() {
    return {
      show: false
    }
  },
  methods: {
    beforeEnter(el) {
      gsap.set(el, {
        scaleX: 0.8,
        scaleY: 1.2
      })
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 1,
        scaleX: 1.5,
        scaleY: 0.7,
        opacity: 1,
        x: 150,
        ease: 'elastic.inOut(2.5, 1)',
        onComplete: done
      })
    },
    leave(el, done) {
       gsap.to(el, {
        duration: 0.7,
        scaleX: 1,
        scaleY: 1,
        x: 300,
        ease: 'elastic.inOut(2.5, 1)',
      })
      gsap.to(el, {
        duration: 0.2,
        delay: 0.5,
        opacity: 0,
        onComplete: done
      })
    }
  }
}
Vue.createApp(Demo5).mount('#demo5')


// --------Demo 6--------------------

const Demo6 = {
  data() {
    return {
      on: false
    }
  }
}

Vue.createApp(Demo6).mount('#demo6')


