<template>
  <div id="vuepress-theme-blog__global-layout">
    <Header />
    <div class="content-wrapper">
      <DefaultGlobalLayout />
    </div>
    <Footer />
  </div>
</template>

<script>
import GlobalLayout from '@app/components/GlobalLayout.vue'
import Header from '@theme/components/Header.vue'
import Footer from '@theme/components/Footer.vue'

export default {
  components: {
    DefaultGlobalLayout: GlobalLayout,
    Header,
    Footer,
  },
}
</script>

<style lang="stylus">
.content-wrapper
  max-width $contentWidth
  margin 0 auto
  padding 2rem
  @media (max-width: $MQMobile)
    padding 1rem
</style>
