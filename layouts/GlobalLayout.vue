<template>
  <div id="vuepress-theme-blog__global-layout">
    <Header />
    <div class="max-width-layout content">
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

<style lang="stylus" scoped>
.content
  margin-top 3rem
</style>
