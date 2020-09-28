<template>
  <section>
    <Title>Blog</Title>

    <div itemscope itemtype="http://schema.org/Blog">
      <template v-for="i in 3">
        <PostPreview v-if="pages[i]" :key="pages[i].key" :page="pages[i]" />
      </template>
    </div>
  </section>
</template>

<script>
import PostPreview from '@theme/components/PostPreview.vue'
import Title from '@theme/components/landing/Title.vue'

export default {
  components: {
    PostPreview,
    Title,
  },

  computed: {
    pages() {
      return this.$pagination.pages
    },
  },
}
</script>
