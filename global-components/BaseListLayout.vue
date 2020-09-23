<template>
  <div itemscope itemtype="http://schema.org/Blog">
    <PostPreview v-for="page in pages" :key="page.key" :page="page" />

    <component
      :is="paginationComponent"
      v-if="$pagination.length > 1 && paginationComponent"
    ></component>
  </div>
</template>

<script>
/* global THEME_BLOG_PAGINATION_COMPONENT */

import Vue from 'vue'
import {
  Pagination,
  SimplePagination,
} from '@vuepress/plugin-blog/lib/client/components'
import PostPreview from '@theme/components/PostPreview.vue'

export default {
  components: {
    PostPreview,
  },

  data() {
    return {
      paginationComponent: null,
    }
  },

  computed: {
    pages() {
      return this.$pagination.pages
    },
  },

  created() {
    this.paginationComponent = this.getPaginationComponent()
  },

  methods: {
    getPaginationComponent() {
      const n = THEME_BLOG_PAGINATION_COMPONENT
      if (n === 'Pagination') {
        return Pagination
      }

      if (n === 'SimplePagination') {
        return SimplePagination
      }

      return Vue.component(n) || Pagination
    },
  },
}
</script>
