<template>
  <footer class="footer">
    <span class="text">
      <strong>Made</strong>
      with
      <svg class="heart" viewBox="0 0 391.837 391.837">
        <title>Love</title>
        <path
          d="M285.257 35.528c58.743.286 106.294 47.836 106.58 106.58 0 107.624-195.918 214.204-195.918 214.204S0 248.165 0 142.108c0-58.862 47.717-106.58 106.58-106.58a105.534 105.534 0 0189.339 48.065 106.578 106.578 0 0189.338-48.065z"
          fill="#d7443e"
        />
      </svg>
      by
      <strong>Maurici Abad</strong>
    </span>
  </footer>
</template>

<style lang="stylus" scoped>
.heart
  height 1em
  vertical-align -0.15em
  transition transform 0.5s cubic-bezier(0.35, 3.46, 0.36, -0.29)

.footer
  padding 0 1rem 1rem
  line-height 1
  text-align center

.text:hover .heart
  transform scale(1.333)
</style>
