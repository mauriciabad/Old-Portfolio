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
    <div class="project-list">
      <ProjectEntry
        github="true"
        title="Full list in GitHub"
        description="This are highlated projects, you’ll find the full list in my GitHub profile."
      />
      <ProjectEntry
        v-for="project in projects"
        :key="project.title"
        v-bind="project"
      />
    </div>
  </section>
</template>

<script>
import Title from '@theme/components/landing/Title.vue'
import ProjectEntry from '@theme/components/landing/ProjectEntry.vue'

export default {
  components: { Title, ProjectEntry },
  props: {
    projects: Array,
  },
}
</script>

<style lang="stylus" scoped>
$dividerTopHeight = 5vw
$dividerBotHeight = 5vw

section
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
.project-list
  display grid
  gap 2rem
  grid-template repeat(2, auto) \/ repeat(3, minmax(auto, 17rem))
  padding-bottom 3rem
  justify-content center
  @media (max-width: 17rem * 3 + 2rem * 2 + 2rem * 2)
    gap 1rem
  @media (max-width: 14rem * 3 + 1rem * 2 + 2rem * 2)
    gap 2rem
    grid-template repeat(3, auto) \/ repeat(2, minmax(auto, 17rem))
  @media (max-width: 17rem * 2 + 2rem * 1 + 2rem * 2)
    gap 1rem
  @media (max-width: 14rem * 2 + 1rem * 1 + 2rem * 2)
    gap 2rem
    grid-template repeat(6, auto) \/ repeat(1, minmax(auto, 20rem))
  @media (max-width: 20rem * 1 + 2rem * 0 + 2rem * 2)
    gap 1rem
</style>
