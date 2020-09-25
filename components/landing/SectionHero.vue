<template>
  <div class="hero">
    <div class="info">
      <h1 class="title">Web developer<br />& UI/UX Designer</h1>
      <p class="desc">
        I'm <b>Maurici Abad</b>, a <i>Software Engineer</i> who makes people’s
        lives easier and happier.
      </p>
      <div class="details">
        <div class="detail">
          <IconCompass /><span class="detail__text"
            >Barcelona<span class="detail__faded-text">, Spain</span></span
          >
        </div>
        <div class="detail">
          <IconHourglass /><span class="detail__text"
            >22.<span class="detail__gradient-faded-text"
              >6469953183</span
            ></span
          ><span class="detail__subtext">Years old</span>
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
      <p>or <a href="mailto:hello@mauriciabad.com">hello@mauriciabad.com</a></p>
    </div>
    <ImageHero />
  </div>
</template>

<script>
import IconCompass from '@theme/components/landing/IconCompass.vue'
import IconHourglass from '@theme/components/landing/IconHourglass.vue'
import ImageHero from '@theme/components/landing/ImageHero.vue'
import ButtonHero from '@theme/components/landing/ButtonHero.vue'

export default {
  name: 'SectionHero',
  components: {
    IconCompass,
    IconHourglass,
    ImageHero,
    ButtonHero,
  },
}
</script>

<style lang="stylus" scoped>
.hero
  display grid
  grid-template auto / 25rem auto
.action-buttons
  display flex
  & > *
    margin-right 1rem
.details
  display flex
  & > *
    margin-right 1rem
.detail
  position relative
  line-height 1
  &__subtext
    position absolute
    top 100%
    right 0
</style>
