<template>
  <section id="blog" class="a1J[120px] a1T">
    <div class="ae">
      <div
        class="wow fadeInUp a3r a3K aH[800px] a2G md:a30"
        data-wow-delay="0s"
        style="
          visibility: visible;
          animation-delay: 0s;
          animation-name: fadeInUp;
        "
      >
        <h2 class="a2d a2o a1P a2p a1k dark:aT md:a2Q[45px]">
          Recent News &amp; Blogs
        </h2>
        <!-- <p class="aO a1R aQ dark:aS">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed
          congue arcu, In et dignissim quam condimentum vel.
        </p> -->
      </div>
      <div class="ag aa a1L justify-content">
        <div
          v-for="data in news"
          v-bind:key="data.id"
          class="ab ak md:a1M/2 lg:a1M/3"
        >
          <div
            class="wow fadeInUp a1W a2c au a1v dark:a1w[#14102C]"
            data-wow-delay="0s"
            style="
              visibility: visible;
              animation-delay: 0s;
              animation-name: fadeInUp;
            "
          >
            <a
              :href="'/news/'+data.id"
              class="an"
            >
              <img :src="data.img" alt="blog-image" class="ab" />
            </a>
            <div class="a3h lg:aI xl:a29">
              <div class="a2s aa ac">
                <p class="aa ac aQ dark:aS">
                  <span class="a2t a2u dark:aT">
                    <svg width="21" height="21" viewBox="0 0 21 21" class="a1B">
                      <path
                        d="M6.125 10.5H7.875V12.25H6.125V10.5ZM18.375 5.25V17.5C18.375 17.9641 18.1906 18.4092 17.8624 18.7374C17.5342 19.0656 17.0891 19.25 16.625 19.25H4.375C3.40375 19.25 2.625 18.4625 2.625 17.5V5.25C2.625 4.78587 2.80937 4.34075 3.13756 4.01256C3.46575 3.68437 3.91087 3.5 4.375 3.5H5.25V1.75H7V3.5H14V1.75H15.75V3.5H16.625C17.0891 3.5 17.5342 3.68437 17.8624 4.01256C18.1906 4.34075 18.375 4.78587 18.375 5.25ZM4.375 7H16.625V5.25H4.375V7ZM16.625 17.5V8.75H4.375V17.5H16.625ZM13.125 12.25V10.5H14.875V12.25H13.125ZM9.625 12.25V10.5H11.375V12.25H9.625ZM6.125 14H7.875V15.75H6.125V14ZM13.125 15.75V14H14.875V15.75H13.125ZM9.625 15.75V14H11.375V15.75H9.625Z"
                      ></path>
                    </svg>
                  </span>
                  {{ data.date }}
                </p>
              </div>
              <h3>
                <a
                  :href="'/news/'+data.id"
                  class="a1N an a1O a1P a2u hover:aR dark:aT dark:hover:aR sm:a2B lg:aO xl:a2B"
                >
                  {{ data.title }}
                </a>
              </h3>
              <p class="a1F a1R a4u aQ dark:aS">
                {{ data.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  async asyncData({ $content }) {
    const news = await $content('news').fetch()
    return { news }
  },
}
</script>
<style scoped>
.justify-content {
  justify-content: center;
}
</style>