<template>
  <div>
    <h2>Blog</h2>

    <div itemscope itemtype="http://schema.org/Blog">
      <template v-for="i in 3">
        <PostPreview v-if="pages[i]" :key="pages[i].key" :page="pages[i]" />
      </template>
    </div>
  </div>
</template>

<script>
import PostPreview from '@theme/components/PostPreview.vue'

export default {
  components: {
    PostPreview,
  },

  computed: {
    pages() {
      return this.$pagination.pages
    },
  },
}
</script>
