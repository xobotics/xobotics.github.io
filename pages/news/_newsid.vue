<template>
  <div class="mt-40">
    <div v-if="news">
      <news-content :news="news" />
    </div>
    <div v-else class="container mx-auto img-container">
      <img src="/img/404.png" class="img-404" alt="404 Page Not Found" />
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: this.news ? this.news.title : "News | Xobotics",
      meta: [
        {
          property: "og:title",
          content: "News | Xobotics",
        },
        {
          property: "og:description",
          content: this.news ? this.news.title : "News | Xobotics",
        },
        {
          property: "og:image",
          content: this.news
            ? this.news.img
            : "https://xobotics.io/site-thumbnail.jpg",
        },
        {
          property: "og:url",
          content: "https://xobotics.io",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    };
  },
  async asyncData({ $content, params }) {
    const news = await $content('news', params.newsid).fetch()
    return { news }
  },
};
</script>
<style scoped>
.img-container {
  margin: 70px auto;
  text-align: center;
}
.img-404 {
  width: 50%;
  margin: auto;
}
</style>
