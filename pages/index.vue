<template>
  <div>
    <section>
      <home-hero />
    </section>
    <div class="my-5">
      <home-about />
    </div>
    <div class="my-5">
      <home-service />
    </div>
    <div class="my-5">
      <home-news :news="news" />
    </div>
    <div class="my-5">
      <home-partnership />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const news = await $content('news').limit(3).fetch()
    return { news }
  },
};
</script>