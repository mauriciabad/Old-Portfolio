<template>
  <section>
    <div class="bg" aria-hidden="true">
      <div class="bg-gradient"></div>
    </div>
    <h2>Projects</h2>
  </section>
</template>

<style lang="stylus" scoped>
section
  height 30rem
  position relative
  color #fff

  .bg
    z-index -1
    pointer-events none
    position absolute
    top 0
    bottom 0
    left 50%
    transform translateX(-50%)
    width 100vw

    .bg-gradient
      position absolute
      top 0
      bottom 0
      left 0
      right 0
      background linear-gradient(-15deg, #6877FF, #C57BFF)
</style>
