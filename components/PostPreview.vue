<template>
  <NavLink
    class="entry-link"
    :aria-label="'post link ' + page.title"
    :link="page.path"
  >
    <article
      itemprop="blogPost"
      class="entry"
      itemscope
      itemtype="https://schema.org/BlogPosting"
    >
      <meta itemprop="mainEntityOfPage" :content="page.path" />
      <img class="entry-image" :src="page.frontmatter.featuredimg" />
      <header class="entry-header">
        <h2 itemprop="name headline">{{ page.title }}</h2>
      </header>
      <section class="entry-content">
        <p class="entry-description" itemprop="description">
          {{ page.frontmatter.contentPreview }}
        </p>
      </section>
      <footer class="entry-footer">
        <!-- <div
              v-if="page.frontmatter.tags"
              class="entry-tag"
              itemprop="keywords"
            >
              <span>{{ tag }}</span>
            </div> -->
        <time
          v-if="page.frontmatter.date"
          pubdate
          itemprop="datePublished"
          :datetime="page.frontmatter.date"
        >
          {{ formatDate(page.frontmatter.date) }}
        </time>
        <!-- · ?? min -->· {{ page.frontmatter.author }}
      </footer>
    </article>
  </NavLink>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    page: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate(date) {
      return new Intl.DateTimeFormat('en-GB', {
        dateStyle: 'full',
      }).format(new Date(date))
    },
  },
}
</script>

<style lang="stylus">
.entry-image
  grid-area img
  object-fit cover
  border-radius 1rem 0 0 1rem
  margin -1.5rem
  height: calc(3rem + 100%)

.entry-link
  color currentColor
  text-decoration none
  border-radius 1rem
  display block
  margin 0 auto
  max-width 52rem

.entry
  text-align left
  background-color #fff
  margin 2rem 0
  padding 1.5rem
  box-shadow 0 2px 8px rgba(0,0,0,0.15)
  border-radius 1rem
  display grid
  grid-template auto auto auto / 10rem auto
  grid-template-areas "img title"\
                      "img desc"\
                      "img footer"
.entry-description
  line-height 1.6
  height 1rem * 2 * 1.6
  overflow hidden
  position relative

  &::after
    height: 1rem * 1.6
    content ''
    position: absolute;
    bottom: 0;
    right: 0;
    width: 15rem;
    pointer-events none
    // background: linear-gradient(
    //   to right,
    //   hsla(0, 0%, 100%, 0),
    //   ease-in-out,
    //   hsla(0, 0%, 100%, 1)
    // )
    background: linear-gradient(
      to right,
      hsla(0, 0%, 100%, 0) 0%,
      hsla(0, 0%, 100%, 0.013) 8.1%,
      hsla(0, 0%, 100%, 0.049) 15.5%,
      hsla(0, 0%, 100%, 0.104) 22.5%,
      hsla(0, 0%, 100%, 0.175) 29%,
      hsla(0, 0%, 100%, 0.259) 35.3%,
      hsla(0, 0%, 100%, 0.352) 41.2%,
      hsla(0, 0%, 100%, 0.45) 47.1%,
      hsla(0, 0%, 100%, 0.55) 52.9%,
      hsla(0, 0%, 100%, 0.648) 58.8%,
      hsla(0, 0%, 100%, 0.741) 64.7%,
      hsla(0, 0%, 100%, 0.825) 71%,
      hsla(0, 0%, 100%, 0.896) 77.5%,
      hsla(0, 0%, 100%, 0.951) 84.5%,
      hsla(0, 0%, 100%, 0.987) 91.9%,
      hsl(0, 0%, 100%) 100%
    )
.entry-header h2
  margin 0
</style>
