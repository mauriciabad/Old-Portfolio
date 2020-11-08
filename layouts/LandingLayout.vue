<template>
  <div>
    <SectionHero />
    <SectionProjects :projects="data.projects" />
    <SectionBlog />
  </div>
</template>

<script>
import SectionHero from '@theme/components/landing/SectionHero.vue'
import SectionProjects from '@theme/components/landing/SectionProjects.vue'
import SectionBlog from '@theme/components/landing/SectionBlog.vue'
import data from '@theme/docs/landing.json'

export default {
  components: {
    SectionHero,
    SectionProjects,
    SectionBlog,
  },
  data: function() {
    return {
      data,
    }
  },
}
</script>
