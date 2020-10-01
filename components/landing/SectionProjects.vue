<template>
  <section>
    <div class="bg" aria-hidden="true">
      <div class="bg-gradient"></div>
      <div class="bg-divider bg-divider--top">
        <svg
          width="1440"
          height="45"
          viewBox="0 0 1440 45"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0C563.5 60 877.5 60 1440 0H0Z" fill="currentColor" />
        </svg>
      </div>
      <div class="bg-divider bg-divider--bottom">
        <svg
          width="1440"
          height="45"
          viewBox="0 0 1440 45"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 45C563.5 -15 877.5 -15 1440 45H0Z" fill="currentColor" />
        </svg>
      </div>
    </div>
    <Title>Projects</Title>
  </section>
</template>

<script>
import Title from '@theme/components/landing/Title.vue'

export default {
  components: { Title },
}
</script>

<style lang="stylus" scoped>
$dividerTopHeight = 5vw
$dividerBotHeight = 5vw

section
  height 30rem
  position relative
  color #fff
  padding $dividerTopHeight 0 $dividerBotHeight
  margin -0.5 * $dividerTopHeight 0 -0.5 * $dividerBotHeight

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

.bg-divider
  position absolute
  left 0
  width 100%
  overflow hidden
  line-height 0
  color $bgColor

  svg
    display block
    width 100%

  &--top
    top -1px
    svg
      height $dividerTopHeight

  &--bottom
    bottom -1px
    svg
      height $dividerBotHeight
</style>
