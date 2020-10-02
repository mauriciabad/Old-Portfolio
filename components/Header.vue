<template>
  <header class="header">
    <nav class="max-width-layout navbar">
      <NavLink link="/" class="brand">
        <img :src="$withBase($themeConfig.logo)" />
      </NavLink>
      <div class="nav-right">
        <SearchBox />
        <ul v-if="$themeConfig.nav" class="links">
          <li v-for="item in $themeConfig.nav" :key="item.text" class="item">
            <NavLink :link="item.link" class="link">{{ item.text }}</NavLink>
          </li>
        </ul>
        <NavLink link="https://github.com/mauriciabad/" class="link-icon">
          <GithubIcon />
        </NavLink>
        <NavLink link="https://linkedin.com/in/mauriciabad/" class="link-icon">
          <LinkedinIcon />
        </NavLink>
      </div>
    </nav>
  </header>
</template>

<script>
import SearchBox from '@SearchBox'
import { GithubIcon, LinkedinIcon } from 'vue-feather-icons'

export default {
  components: { SearchBox, GithubIcon, LinkedinIcon },
}
</script>

<style lang="stylus" scoped>
.header
  position fixed
  z-index 100
  top 0
  left 0
  right 0
  height 3rem
  background-color #fff
  box-shadow 0 -1rem 0.75rem 1rem rgba(0,0,0,0.1)
.nav-right
  display flex
  align-items: center;
.navbar
  display flex
  justify-content space-between
  line-height 1
.brand img
  display block
  height 1.75rem
  padding 0.625rem
  margin-left -0.625rem
.item
  font-weight bold
  text-transform uppercase
  color #2F313D
  text-decoration none
  color red
.links
  display flex
  list-style none
  margin 0
  padding 0
.link
  padding 1rem 0.75rem;
  display block
  position relative
  text-decoration none
  color: #2f313d
  &:before
    content ''
    width 0.4rem
    height @width
    position absolute
    bottom 0.6rem - (@height/2)
    left "calc(50% - %s)" % (@width / 2)
    background-color currentColor
    border-radius 100%
    transition opacity 150ms ease-out
    opacity 0
  &:hover:before
    opacity 1
.link-icon
  color currentColor
  height 3rem
svg
  height 1.5rem
  padding 0.75rem 0.375rem
</style>
