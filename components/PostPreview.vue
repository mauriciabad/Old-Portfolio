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
        <p itemprop="description">
          {{ page.frontmatter.summary || page.summary }}
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
  height: calc(3rem + 100%);grid-areaimgobject-fitcoverborder-radius1rem001remmargin-1.5remheightgrid-areaimgobject-fitcoverborder-radius1rem001remmargin-1.5remheightgrid-areaimgobject-fitcoverborder-radius1rem001remmargin-1.5remheightgrid-areaimgobject-fitcoverborder-radius1rem001remmargin-1.5remheightgrid-areaimgobject-fitcoverborder-radius1rem001remmargin-1.5remheightgrid-areaimgobject-fitcoverborder-radius1rem001remmargin-1.5remheightgrid-areaimgobject-fitcoverborder-radius1rem001remmargin-1.5remheight

.entry-link
  color currentColor
  text-decoration none
  border-radius 1rem
  display block

.entry
  background-color #fff
  margin 2rem auto
  max-width 52rem
  padding 1.5rem
  box-shadow 0 2px 8px rgba(0,0,0,0.15)
  border-radius 1rem
  display grid
  grid-template auto auto auto / 10rem auto
  grid-template-areas "img title"\
                      "img desc"\
                      "img footer"

.entry-header h2
  margin 0
</style>
