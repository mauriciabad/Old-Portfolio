<template>
  <div class="container">
    <img class="img" :src="preview" alt="" />
    <h3 class="title">{{ title }}</h3>
    <p class="desctiption">{{ description }}</p>
    <div class="action-bar">
      <a
        v-if="source_code_url"
        :href="source_code_url"
        class="action action--code"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.29629 0C1.40564 0 0.666656 0.72555 0.666656 1.6V13.6C0.666656 14.4745 1.40564 15.2 2.29629 15.2H4.74073V13.6H3.92592V1.6H13.7037V13.6H9.62962V15.2H13.7037C14.5943 15.2 15.3333 14.4745 15.3333 13.6V1.6C15.3333 0.72555 14.5943 0 13.7037 0H2.29629ZM5.55555 3.2V4.8H7.18517V3.2H5.55555ZM5.55555 6.4V8H7.18517V6.4H5.55555ZM5.55555 9.6V11.2H7.18517V9.6H5.55555ZM5.55555 12.8V16L7.18517 15.2L8.8148 16V12.8H5.55555Z"
            fill="currentColor"
          />
        </svg>
        <span>Code</span>
      </a>
      <div v-if="source_code_url && preview_url" class="separator"></div>
      <a v-if="preview_url" :href="preview_url" class="action action--preview">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.9121 7.7272C15.7693 7.52752 12.3646 2.8437 8.03143 2.8437C3.69793 2.8437 0.230703 7.52752 0.0878907 7.7272C-0.0292969 7.89033 -0.0292969 8.11002 0.0878907 8.27283C0.230703 8.47252 3.69793 13.1563 8.03143 13.1563C12.3646 13.1563 15.7693 8.47252 15.9121 8.2728C16.0293 8.11002 16.0293 7.8903 15.9121 7.7272ZM8.03143 11.2813C6.22233 11.2813 4.68765 9.80908 4.68765 7.99999C4.68765 6.19089 6.22233 4.7187 8.03143 4.7187C9.84053 4.7187 11.3127 6.19089 11.3127 7.99999C11.3127 9.80908 9.84053 11.2813 8.03143 11.2813Z"
            fill="currentColor"
          />
          <path
            d="M8.03149 6.59369C7.25587 6.59369 6.56274 7.22463 6.56274 7.99994C6.56274 8.77556 7.25587 9.40619 8.03149 9.40619C8.80681 9.40619 9.43774 8.77556 9.43774 7.99994C9.43774 7.22463 8.80681 6.59369 8.03149 6.59369Z"
            fill="currentColor"
          />
        </svg>
        <span>Preview</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    // tags: Array,
    preview: String,
    source_code_url: String,
    preview_url: String,
  },
}
</script>

<style lang="stylus" scoped>
.container
  color #2f313d
  background rgba(255,255,255,0.8)
  border-radius 1rem
  box-shadow 0 0.25rem 1rem rgba(0,0,0,0.15)
  display flex
  flex-direction column
.img
  border-radius 1rem 1rem 0 0
  width 100%
  display block

.title
  margin 0.5rem 1rem
  font-weight 1.125rem

.desctiption
  margin 0 1rem 1rem
  line-height 1.6
  flex-grow 1

.action-bar
  background rgba(255,255,255,0.4)
  display grid
  grid-template auto / 1fr 1px 1fr
  border-radius 0 0 1rem 1rem

.separator
  width 1px
  height 1rem
  background rgba(0,0,0,0.15)
  align-self center

.action
  text-decoration none
  color currentColor
  position relative
  line-height 1
  font-size 1.0625rem
  padding 0.75rem 0
  font-weight bold
  text-transform uppercase
  display flex
  align-items center
  justify-content center
  // outline none
  // box-shadow 0 0 0 0 currentColor
  // transition box-shadow 200ms cubic-bezier(0.18, 0.89, 0.32, 1.28)

  &--code
    border-radius 0 0 0 1rem
  &--preview
    border-radius 0 0 1rem 0

  // &:focus
  //   box-shadow 0 0 0 0.25rem currentColor

  & svg
    margin-right 0.5rem
    height 1.0625rem
    width 1.0625rem
</style>
