<template>
  <h2><slot></slot></h2>
</template>

<style lang="stylus" scoped>
h2 {
  font-size 2rem
  text-transform uppercase
  font-weight bold
  text-align center
  margin 0
  padding 2rem 0
  line-height 0.8

  &:before, &:after {
    content '-'
    opacity 0.5
  }
  &:after {
    margin-left 1.5rem
  }
  &:before {
    margin-right 1.5rem
  }
}
</style>
