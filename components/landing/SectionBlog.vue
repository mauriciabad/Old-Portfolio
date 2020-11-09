<template>
  <section id="blog" class="section">
    <Title>Blog</Title>

    <div itemscope itemtype="http://schema.org/Blog">
      <template v-for="page in $pagination.pages">
        <PostPreview v-if="page" :key="page.key" :page="page" />
      </template>
    </div>
    <Pagination class="pagination" />
  </section>
</template>

<script>
import PostPreview from '@theme/components/PostPreview.vue'
import Title from '@theme/components/landing/Title.vue'
import { Pagination } from '@vuepress/plugin-blog/lib/client/components'

export default {
  components: {
    PostPreview,
    Title,
    Pagination,
  },

  computed: {
    pages() {
      return this.$pagination.pages
    },
  },
}
</script>

<style lang="stylus" scoped>
.section
  text-align center
.pagination
  margin 1rem 0 4rem
</style>
