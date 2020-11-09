<template>
  <main id="about" class="hero">
    <div class="info">
      <h1 class="title">Web developer<br />& UI/UX Designer</h1>
      <p class="desc">
        I'm <b>Maurici Abad</b>, a <i>Software Engineer</i> who <br />
        makes people’s lives easier and happier.
      </p>
      <div class="details">
        <div class="detail detail-first">
          <IconCompass /><span class="detail__text"
            >Barcelona<span class="detail__text--faded">, Spain</span></span
          >
        </div>
        <div class="detail">
          <IconHourglass />
          <span class="detail__text detail__text--gradient-faded">
            <AgeStopwatch />
            <span class="detail__subtext">Years old</span>
          </span>
        </div>
      </div>
      <div class="action-buttons">
        <ButtonHero
          icon="github"
          title="GitHub"
          url="https://github.com/mauriciabad"
        />
        <ButtonHero
          icon="linkedin"
          title="LinkedIn"
          url="https://linkedin.com/in/mauriciabad"
        />
      </div>
      <p class="sub-action">
        or
        <NavLink class="email" link="mailto:hello@mauriciabad.com">
          hello@mauriciabad.com
        </NavLink>
      </p>
    </div>
    <ImageHero class="image" />
  </main>
</template>

<script>
import IconCompass from '@theme/components/landing/IconCompass.vue'
import IconHourglass from '@theme/components/landing/IconHourglass.vue'
import ImageHero from '@theme/components/landing/ImageHero.vue'
import ButtonHero from '@theme/components/landing/ButtonHero.vue'
import AgeStopwatch from '@theme/components/landing/AgeStopwatch.vue'

export default {
  name: 'SectionHero',
  components: {
    IconCompass,
    IconHourglass,
    ImageHero,
    ButtonHero,
    AgeStopwatch,
  },
}
</script>

<style lang="stylus" scoped>
.hero
  display grid
  grid-template auto / min-content auto
  min-height 80vh
  align-items center
  gap 2rem
.info
  margin 1rem 0 2rem
.action-buttons
  display flex
  & > *
    margin-right 1rem
.title
  margin 0
  color #2f313d
  font-size 3rem
  text-transform uppercase
  white-space nowrap
  line-height 1.25
.desc
  color #2f313d
  line-height 1.6
  margin 2rem 0
  b
    font-weight bold
  i
    color #767dbc
    font-weight bold
    font-style normal
.details
  display flex

  margin-bottom 4rem
.detail
  color #2f313d
  display flex
  align-items center
  line-height 1
  font-size 1.125rem
  font-weight bold
  text-transform uppercase
  &-first
    flex-grow 1
  svg,img
    margin-right 0.5rem
    height 1.5rem

.detail__text
  position relative
.detail__text--faded
  color #8f8f93
.detail__subtext
  position absolute
  font-size 0.75rem
  color #8f8f93
  top 100%
  right 1rem
.detail__text--gradient-faded
  position relative
  width 7.75em
  &::after
    content ''
    position absolute
    top 0
    right -1.5em
    bottom 0
    left 100%
    pointer-events none
    background $bgColor

  &::before
    content ''
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    pointer-events none

    // background-image linear-gradient(
    //   to right,
    //   hsla(0, 0%, 100%, 0),
    //   cubic-bezier(0.74, 0.34, 1, 1),
    //   hsla(0, 0%, 0%, 1)
    // )

    // background-image linear-gradient(
    //   to right,
    //   hsla(210deg 20% 98%, 0) 0%,
    //   hsla(210deg 20% 98%, 0.131) 4.5%,
    //   hsla(210deg 20% 98%, 0.253) 9.9%,
    //   hsla(210deg 20% 98%, 0.365) 16.2%,
    //   hsla(210deg 20% 98%, 0.468) 23%,
    //   hsla(210deg 20% 98%, 0.561) 30.4%,
    //   hsla(210deg 20% 98%, 0.646) 38.1%,
    //   hsla(210deg 20% 98%, 0.721) 46%,
    //   hsla(210deg 20% 98%, 0.787) 54%,
    //   hsla(210deg 20% 98%, 0.844) 61.9%,
    //   hsla(210deg 20% 98%, 0.892) 69.6%,
    //   hsla(210deg 20% 98%, 0.931) 77%,
    //   hsla(210deg 20% 98%, 0.961) 83.8%,
    //   hsla(210deg 20% 98%, 0.983) 90.1%,
    //   hsla(210deg 20% 98%, 0.996) 95.5%,
    //   hsl(210deg 20% 98%) 100%
    // )
    background-image linear-gradient(
      to right,
      hsla(210deg 20% 98%, 0) 0%,
      hsla(210deg 20% 98%, 0.013) 5.3%,
      hsla(210deg 20% 98%, 0.049) 11.2%,
      hsla(210deg 20% 98%, 0.104) 17.6%,
      hsla(210deg 20% 98%, 0.175) 24.4%,
      hsla(210deg 20% 98%, 0.259) 31.5%,
      hsla(210deg 20% 98%, 0.352) 38.8%,
      hsla(210deg 20% 98%, 0.45) 46.3%,
      hsla(210deg 20% 98%, 0.55) 53.7%,
      hsla(210deg 20% 98%, 0.648) 61.2%,
      hsla(210deg 20% 98%, 0.741) 68.5%,
      hsla(210deg 20% 98%, 0.825) 75.6%,
      hsla(210deg 20% 98%, 0.896) 82.4%,
      hsla(210deg 20% 98%, 0.951) 88.8%,
      hsla(210deg 20% 98%, 0.987) 94.7%,
      hsl(210deg 20% 98%) 100%
    )

    // background-image linear-gradient(
    //   to right,
    //   hsla(210deg 20% 98%, 0) 0%,
    //   hsla(210deg 20% 98%, 0.013) 8.1%,
    //   hsla(210deg 20% 98%, 0.049) 15.5%,
    //   hsla(210deg 20% 98%, 0.104) 22.5%,
    //   hsla(210deg 20% 98%, 0.175) 29%,
    //   hsla(210deg 20% 98%, 0.259) 35.3%,
    //   hsla(210deg 20% 98%, 0.352) 41.2%,
    //   hsla(210deg 20% 98%, 0.45) 47.1%,
    //   hsla(210deg 20% 98%, 0.55) 52.9%,
    //   hsla(210deg 20% 98%, 0.648) 58.8%,
    //   hsla(210deg 20% 98%, 0.741) 64.7%,
    //   hsla(210deg 20% 98%, 0.825) 71%,
    //   hsla(210deg 20% 98%, 0.896) 77.5%,
    //   hsla(210deg 20% 98%, 0.951) 84.5%,
    //   hsla(210deg 20% 98%, 0.987) 91.9%,
    //   hsl(210deg 20% 98%) 100%
    // )
.image
  justify-self end
  height 25rem
  object-fit contain
  @media (max-width: $MQNarrow)
    display none

.sub-action
  margin 1rem 0 0
.email
  color #6877ff
</style>
