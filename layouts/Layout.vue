<template>
  <div>
    <!-- <BaseListLayout v-if="$pagination" /> -->
    <LandingLayout v-if="$pagination" />
    <Content v-else />
  </div>
</template>

<script>
import LandingLayout from './LandingLayout.vue'

export default {
  components: {
    LandingLayout,
  },
}
</script>
