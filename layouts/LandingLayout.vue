<template>
  <div>
    <SectionHero />
    <SectionProjects />
    <SectionBlog />
  </div>
</template>

<script>
import SectionHero from '@theme/components/landing/SectionHero.vue'
import SectionProjects from '@theme/components/landing/SectionProjects.vue'
import SectionBlog from '@theme/components/landing/SectionBlog.vue'

export default {
  components: {
    SectionHero,
    SectionProjects,
    SectionBlog,
  },
}
</script>
