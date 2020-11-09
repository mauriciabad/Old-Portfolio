<template>
  <section class="section">
    <Title>Blog</Title>

    <Pagination class="pagination--top" />
    <div itemscope itemtype="http://schema.org/Blog">
      <template v-for="page in $pagination.pages">
        <PostPreview v-if="page" :key="page.key" :page="page" />
      </template>
    </div>
    <Pagination class="pagination--bottom" />
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
}
</script>

<style lang="stylus" scoped>
.section
  text-align center
.pagination
  &--top
    margin 2rem 0 0.5rem
  &--bottom
    margin 1rem 0 4rem
</style>
