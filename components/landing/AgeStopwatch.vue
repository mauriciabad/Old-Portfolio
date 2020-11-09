<template>
  <span>{{ roundedAge }}</span>
</template>

<script>
export default {
  data: function() {
    return {
      age: (Date.now() - new Date('1998-01-29T00:15:00+01:00')) / 31557600000,
      lastTime: null,
      animationFrameId: null,
    }
  },
  computed: {
    roundedAge: function() {
      return this.age.toFixed(11)
    },
  },
  mounted: function() {
    this.animationFrameId = window.requestAnimationFrame(this.updateAge)
  },
  destroyed: function() {
    cancelAnimationFrame(this.animationFrameId)
  },
  methods: {
    updateAge: function(currentTime) {
      if (!this.$data.lastTime) this.$data.lastTime = currentTime

      let dif = currentTime - this.$data.lastTime
      this.$data.age += dif / 31557600000

      this.$data.lastTime = currentTime
      window.requestAnimationFrame(this.updateAge)
    },
  },
}
</script>
